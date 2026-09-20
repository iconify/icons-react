import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2civt24x.css';
import '../../css/v/vbo9mcctp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2civt24x"/><path class="vbo9mcctp"/>`,
		"fallback": "medical-icon:i-respiratory",
	});
}

export default Component;
