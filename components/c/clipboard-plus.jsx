import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/d/d5u8s9qfz.css';
import '../../css/u/u0wa3rbor.css';
import '../../css/o/opb74cb_e.css';
import '../../css/f/f45nwsb6n.css';
import '../../css/h/h1-9gd3ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="d5u8s9qfz"/><path class="u0wa3rbor"/><path class="opb74cb_e"/><path class="f45nwsb6n"/><path class="h1-9gd3ic"/></g>`,
		"fallback": "withicons-retro:clipboard-plus",
	});
}

export default Component;
