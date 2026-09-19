import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1j3fgb5s.css';
import '../../css/t/tnr_bln7f.css';
import '../../css/q/qtv4occad.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j1j3fgb5s"/><path clip-rule="evenodd" class="tnr_bln7f"/><path class="qtv4occad"/></g>`,
		"fallback": "flagpack:bj",
	});
}

export default Component;
