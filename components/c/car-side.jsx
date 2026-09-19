import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nk82svbmt.css';
import '../../css/o/oxq4dibvp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nk82svbmt"/><path class="oxq4dibvp"/></g>`,
		"fallback": "glyphs:car-side",
	});
}

export default Component;
