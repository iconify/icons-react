import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ofrk4zhkm.css';
import '../../css/s/skhkntbiv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ofrk4zhkm"/><path class="skhkntbiv"/></g>`,
		"fallback": "glyphs:garage",
	});
}

export default Component;
