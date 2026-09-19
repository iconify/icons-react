import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ax0es_k0d.css';
import '../../css/k/kl2_i1bht.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ax0es_k0d"/><path class="kl2_i1bht"/></g>`,
		"fallback": "glyphs:filing-cabinet-duo",
	});
}

export default Component;
