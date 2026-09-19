import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0_xakbmh.css';
import '../../css/q/ql9y2wmyd.css';
import '../../css/i/i0rty6q2k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0_xakbmh"/><path class="ql9y2wmyd"/><path class="i0rty6q2k"/></g>`,
		"fallback": "glyphs:bezier-pentagon-duo",
	});
}

export default Component;
