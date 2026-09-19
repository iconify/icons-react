import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dlv04_obq.css';
import '../../css/i/isr3kgbzn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dlv04_obq"/><path class="isr3kgbzn"/></g>`,
		"fallback": "glyphs:head-side-mask",
	});
}

export default Component;
