import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uab5gm8gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uab5gm8gv"/>`,
		"fallback": "ri:function-add-line",
	});
}

export default Component;
