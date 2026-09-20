import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qea8h6rga.css';
import '../../css/l/l934m7d5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qea8h6rga"/><path class="l934m7d5g"/></g>`,
		"fallback": "solar:diagram-up-line-duotone",
	});
}

export default Component;
