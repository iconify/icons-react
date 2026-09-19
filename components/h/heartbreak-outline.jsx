import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4gdt9btj.css';
import '../../css/i/ifp5k0bbk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b4gdt9btj"/><path class="ifp5k0bbk"/></g>`,
		"fallback": "glyphs:heartbreak-outline",
	});
}

export default Component;
