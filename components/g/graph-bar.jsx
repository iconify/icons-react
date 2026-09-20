import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/a/ab6liccyo.css';
import '../../css/d/d-79jbeyd.css';
import '../../css/p/pj24n-bxf.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="ab6liccyo"/><path class="d-79jbeyd"/><path class="pj24n-bxf"/></g>`,
		"fallback": "streamline-stickies-color:graph-bar",
	});
}

export default Component;
