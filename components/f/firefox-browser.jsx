import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgni5lbkj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgni5lbkj"/>`,
		"fallback": "fa7-brands:firefox-browser",
	});
}

export default Component;
