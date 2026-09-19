import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jo7l1vbem.css';
import '../../css/i/ij91p0ogo.css';
import '../../css/e/e1hw3-b-k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jo7l1vbem"/><path class="ij91p0ogo"/><path class="e1hw3-b-k"/></g>`,
		"fallback": "glyphs:graduation-cap",
	});
}

export default Component;
