import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tp0xbbu1o.css';
import '../../css/i/in5jxro8g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tp0xbbu1o"/><path class="in5jxro8g"/></g>`,
		"fallback": "glyphs:electric-scooter",
	});
}

export default Component;
