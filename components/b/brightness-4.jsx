import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qft7asx9b.css';
import '../../css/m/mfgkvkb1j.css';
import '../../css/b/bwkbvwbdm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qft7asx9b"/><path class="mfgkvkb1j"/><path class="bwkbvwbdm"/></g>`,
		"fallback": "streamline-flex-color:brightness-4",
	});
}

export default Component;
