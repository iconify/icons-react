import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pczwx_b9m.css';
import '../../css/i/ieuur3b8f.css';
import '../../css/e/e3091ubgm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pczwx_b9m"/><path class="ieuur3b8f"/><path class="e3091ubgm"/></g>`,
		"fallback": "glyphs:gift-1",
	});
}

export default Component;
