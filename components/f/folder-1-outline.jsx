import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5eze_3de.css';
import '../../css/d/d5h7lvqos.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p5eze_3de"/><path class="d5h7lvqos"/></g>`,
		"fallback": "glyphs:folder-1-outline",
	});
}

export default Component;
