import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbtxd_b2x.css';
import '../../css/c/cvb_u1giy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbtxd_b2x"/><path class="cvb_u1giy"/></g>`,
		"fallback": "glyphs:hand-holding-heart-duo",
	});
}

export default Component;
