import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mwei4gkkt.css';
import '../../css/d/du887ss5t.css';
import '../../css/n/nr9v46bny.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mwei4gkkt"/><path class="du887ss5t"/><path class="nr9v46bny"/></g>`,
		"fallback": "glyphs:binoculars-1",
	});
}

export default Component;
