import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/c/c14pd4bvz.css';
import '../../css/k/k4n552u-a.css';
import '../../css/h/hkzzyub-b.css';
import '../../css/r/rze47ib2l.css';
import '../../css/k/k_j3uacnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="c14pd4bvz"/><path class="k4n552u-a"/><path class="hkzzyub-b"/><path class="rze47ib2l"/><path class="k_j3uacnd"/></g>`,
		"fallback": "withicons-retro:circle-chevron-left",
	});
}

export default Component;
