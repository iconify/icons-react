import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysjm1rbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysjm1rbhn"/>`,
		"fallback": "ri:delete-bin-2-line",
	});
}

export default Component;
