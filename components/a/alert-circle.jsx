import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/x/xpyn64mhu.css';
import '../../css/w/w5p-a9bfa.css';
import '../../css/z/zhdbguf6e.css';
import '../../css/r/rze47ib2l.css';
import '../../css/e/eo1h8kb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="xpyn64mhu"/><path class="w5p-a9bfa"/><path class="zhdbguf6e"/><path class="rze47ib2l"/><path class="eo1h8kb5c"/></g>`,
		"fallback": "withicons-retro:alert-circle",
	});
}

export default Component;
