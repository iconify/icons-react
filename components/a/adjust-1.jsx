import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7rof_xzg.css';
import '../../css/u/u1fmt1boh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7rof_xzg"/><path clip-rule="evenodd" class="u1fmt1boh"/></g>`,
		"fallback": "glyphs-poly:adjust-1",
	});
}

export default Component;
