import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bto7pc17j.css';
import '../../css/k/kp2-bibah.css';
import '../../css/q/qfoyfkmvy.css';
import '../../css/p/pqh64-bnk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bto7pc17j"/><path class="kp2-bibah"/><path class="qfoyfkmvy"/><path class="pqh64-bnk"/></g>`,
		"fallback": "glyphs:binoculars-1-outline",
	});
}

export default Component;
