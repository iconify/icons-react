import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i_v8p5bao.css';
import '../../css/c/c8hbufz0n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i_v8p5bao"/><path class="c8hbufz0n"/></g>`,
		"fallback": "glyphs:headphones",
	});
}

export default Component;
