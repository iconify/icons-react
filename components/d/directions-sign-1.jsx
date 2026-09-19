import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nz3620bxb.css';
import '../../css/e/epxp-p6zr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nz3620bxb"/><path class="epxp-p6zr"/></g>`,
		"fallback": "glyphs-poly:directions-sign-1",
	});
}

export default Component;
