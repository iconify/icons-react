import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efh70xbdi.css';
import '../../css/h/hk9y0zedv.css';
import '../../css/i/i0_oy7bap.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="efh70xbdi"/><path class="hk9y0zedv"/><path class="i0_oy7bap"/></g>`,
		"fallback": "glyphs:dice",
	});
}

export default Component;
