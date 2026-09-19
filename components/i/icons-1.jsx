import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u-ivx_bfl.css';
import '../../css/y/yrrbzob7n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u-ivx_bfl"/><path class="yrrbzob7n"/></g>`,
		"fallback": "glyphs:icons-1",
	});
}

export default Component;
