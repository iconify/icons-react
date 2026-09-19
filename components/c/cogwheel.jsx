import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ko6ce4blt.css';
import '../../css/w/w9xiptpes.css';
import '../../css/c/cgmljzbtv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ko6ce4blt"/><path class="w9xiptpes"/><path class="cgmljzbtv"/></g>`,
		"fallback": "glyphs:cogwheel",
	});
}

export default Component;
