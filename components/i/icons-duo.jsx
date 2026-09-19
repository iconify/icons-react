import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esli9ub9v.css';
import '../../css/k/k8m0tfb2t.css';
import '../../css/s/sltmlw_oe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esli9ub9v"/><path class="k8m0tfb2t"/><path class="sltmlw_oe"/></g>`,
		"fallback": "glyphs:icons-duo",
	});
}

export default Component;
