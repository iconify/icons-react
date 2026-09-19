import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f9tfv8upy.css';
import '../../css/y/y1_sm3-hq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f9tfv8upy"/><path class="y1_sm3-hq"/></g>`,
		"fallback": "glyphs:handshake",
	});
}

export default Component;
