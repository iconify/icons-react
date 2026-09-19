import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycmz1urwb.css';
import '../../css/o/oi9gvkbqh.css';

const viewBox = {"width":300,"height":216};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ycmz1urwb"/><path class="oi9gvkbqh"/></g>`,
		"fallback": "cif:al",
	});
}

export default Component;
