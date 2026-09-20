import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g03ovcved.css';
import '../../css/m/m1g9nibzc.css';
import '../../css/a/awab4gbil.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g03ovcved"/><path class="m1g9nibzc"/><path class="awab4gbil"/></g>`,
		"fallback": "streamline-color:bomb",
	});
}

export default Component;
