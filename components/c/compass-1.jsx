import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zbmuzbcez.css';
import '../../css/h/hsp2_ccfa.css';
import '../../css/t/tljyajbkm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zbmuzbcez"/><path class="hsp2_ccfa"/><path class="tljyajbkm"/></g>`,
		"fallback": "glyphs:compass-1",
	});
}

export default Component;
