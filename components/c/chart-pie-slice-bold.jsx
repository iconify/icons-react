import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c93tk2y7a.css';
import '../../css/i/i3pwgovdj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c93tk2y7a"/><path class="i3pwgovdj"/></g>`,
		"fallback": "glyphs:chart-pie-slice-bold",
	});
}

export default Component;
