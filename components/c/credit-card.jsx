import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ziim80_xf.css';
import '../../css/t/tfyqlupub.css';
import '../../css/z/z0t8b_bxs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ziim80_xf"/><path class="tfyqlupub"/><path class="z0t8b_bxs"/></g>`,
		"fallback": "glyphs-poly:credit-card",
	});
}

export default Component;
