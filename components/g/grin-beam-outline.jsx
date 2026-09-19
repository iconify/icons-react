import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l--oy7b-h.css';
import '../../css/o/ob7unl9js.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/a/a_245qbgv.css';
import '../../css/s/sil8tlbni.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l--oy7b-h"/><path class="ob7unl9js"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path clip-rule="evenodd" class="a_245qbgv"/><path class="sil8tlbni"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`,
		"fallback": "glyphs:grin-beam-outline",
	});
}

export default Component;
