import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbufnlpaq.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/j/j15g6x99d.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zbufnlpaq"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path class="j15g6x99d"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`,
		"fallback": "glyphs:frown-outline",
	});
}

export default Component;
