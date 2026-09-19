import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tigk_k56q.css';
import '../../css/a/awiplkhke.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tigk_k56q"/><path class="awiplkhke"/></g>`,
		"fallback": "glyphs:arrow-long-bold",
	});
}

export default Component;
