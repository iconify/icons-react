import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwqombcpz.css';
import '../../css/k/kbivwbgjc.css';
import '../../css/k/kp-bi2n2c.css';
import '../../css/e/e70y-4bza.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wwqombcpz"/><path clip-rule="evenodd" class="kbivwbgjc"/><path class="kp-bi2n2c"/><path clip-rule="evenodd" class="e70y-4bza"/></g>`,
		"fallback": "glyphs:align-items-side-outline",
	});
}

export default Component;
