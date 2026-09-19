import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1qp3l54h.css';
import '../../css/t/tj4vulnki.css';
import '../../css/o/okr_p42se.css';
import '../../css/q/qff5zwbcp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1qp3l54h"/><path clip-rule="evenodd" class="tj4vulnki"/><path class="okr_p42se"/><path clip-rule="evenodd" class="qff5zwbcp"/></g>`,
		"fallback": "glyphs:chevron-square-outline",
	});
}

export default Component;
