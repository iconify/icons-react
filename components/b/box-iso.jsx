import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vl0ghjbbr.css';
import '../../css/a/a92sbk2qf.css';
import '../../css/r/r3wm3tj4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vl0ghjbbr"/><path class="a92sbk2qf"/><path class="r3wm3tj4s"/></g>`,
		"fallback": "iconoir:box-iso",
	});
}

export default Component;
