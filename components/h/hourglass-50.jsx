import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp6538qpk.css';
import '../../css/a/aqdcgn30f.css';
import '../../css/e/eve4-3bhx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rp6538qpk"/><path class="aqdcgn30f"/><path clip-rule="evenodd" class="eve4-3bhx"/></g>`,
		"fallback": "glyphs-poly:hourglass-50",
	});
}

export default Component;
