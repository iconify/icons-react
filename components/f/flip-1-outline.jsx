import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdtcnac0c.css';
import '../../css/e/eh6lx4har.css';
import '../../css/d/dwevdfbxv.css';
import '../../css/o/ox3_uabnm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdtcnac0c"/><path clip-rule="evenodd" class="eh6lx4har"/><path class="dwevdfbxv"/><path clip-rule="evenodd" class="ox3_uabnm"/></g>`,
		"fallback": "glyphs:flip-1-outline",
	});
}

export default Component;
