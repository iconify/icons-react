import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3-609uay.css';
import '../../css/q/qg1124b7z.css';
import '../../css/g/ggyc5ns_y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3-609uay"/><path class="qg1124b7z"/><path class="ggyc5ns_y"/></g>`,
		"fallback": "glyphs:gift-2-duo",
	});
}

export default Component;
