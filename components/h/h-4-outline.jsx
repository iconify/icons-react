import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6h_6rb8h.css';
import '../../css/e/erb7lybqj.css';
import '../../css/g/gak2ke3nx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c6h_6rb8h"/><path clip-rule="evenodd" class="erb7lybqj"/><path class="gak2ke3nx"/></g>`,
		"fallback": "glyphs:h-4-outline",
	});
}

export default Component;
