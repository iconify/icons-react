import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oj19uy8nj.css';
import '../../css/s/s4j6tyfoe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oj19uy8nj"/><path class="s4j6tyfoe"/></g>`,
		"fallback": "glyphs:arrow-bold",
	});
}

export default Component;
