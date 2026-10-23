import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flg1lobzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flg1lobzu"/>`,
		"fallback": "vadivam:brackets",
	});
}

export default Component;
