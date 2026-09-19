import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kl9x8cb_k.css';
import '../../css/p/pj3sukt2m.css';
import '../../css/l/lu7yfhe2a.css';
import '../../css/m/mu5jj2lmh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kl9x8cb_k"/><path class="pj3sukt2m"/><path class="lu7yfhe2a"/><path class="mu5jj2lmh"/></g>`,
		"fallback": "glyphs:cogs-1",
	});
}

export default Component;
