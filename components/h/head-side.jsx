import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c0giyjygg.css';
import '../../css/m/mhrp64bxc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c0giyjygg"/><path class="mhrp64bxc"/></g>`,
		"fallback": "glyphs:head-side",
	});
}

export default Component;
