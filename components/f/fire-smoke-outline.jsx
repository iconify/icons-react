import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyoko65yk.css';
import '../../css/f/fmbt5poga.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iyoko65yk"/><path class="fmbt5poga"/></g>`,
		"fallback": "glyphs:fire-smoke-outline",
	});
}

export default Component;
