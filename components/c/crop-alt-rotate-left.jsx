import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn6_se3_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn6_se3_m"/>`,
		"fallback": "uil:crop-alt-rotate-left",
	});
}

export default Component;
