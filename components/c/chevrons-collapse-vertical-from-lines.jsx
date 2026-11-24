import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdi-jobxg.css';
import '../../css/t/twobuiaoq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG7roxmb6D)" class="cuyn6tgcc"><path class="hdi-jobxg"/></g><defs><clipPath id="SVG7roxmb6D"><path class="twobuiaoq"/></clipPath></defs></g>`,
		"fallback": "gravity-ui:chevrons-collapse-vertical-from-lines",
	});
}

export default Component;
