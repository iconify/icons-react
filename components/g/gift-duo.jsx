import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pv-vycm8e.css';
import '../../css/d/dpjsdlepr.css';
import '../../css/t/tntq76sxu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pv-vycm8e"/><path class="dpjsdlepr"/><path class="tntq76sxu"/></g>`,
		"fallback": "glyphs:gift-duo",
	});
}

export default Component;
