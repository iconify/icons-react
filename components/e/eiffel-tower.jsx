import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/x/xjx4f-bpr.css';
import '../../css/v/vvyfu0ezf.css';
import '../../css/n/ngkxng18h.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="xjx4f-bpr"/><path class="vvyfu0ezf"/><path class="ngkxng18h"/></g>`,
		"fallback": "streamline-stickies-color:eiffel-tower",
	});
}

export default Component;
