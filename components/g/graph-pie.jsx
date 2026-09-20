import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t6y5t4bua.css';
import '../../css/k/k2vx3qbnw.css';
import '../../css/u/u16kknbeo.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t6y5t4bua"/><path class="k2vx3qbnw"/><path class="u16kknbeo"/></g>`,
		"fallback": "streamline-stickies-color:graph-pie",
	});
}

export default Component;
