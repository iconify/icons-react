import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei8ati9hl.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/k/kt4x4b-7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGcz2Ucpba" class="ei8ati9hl"/></defs><g class="ft5dv1b6b"><use href="#SVGcz2Ucpba"/><use href="#SVGcz2Ucpba" class="p_3zmsvya"/><path class="kt4x4b-7d"/></g>`,
		"fallback": "tdesign:chart-column",
	});
}

export default Component;
