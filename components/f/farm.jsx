import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/skfy9we-y.css';
import '../../css/k/kuporlixb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="skfy9we-y"/><path class="kuporlixb"/></g>`,
		"fallback": "glyphs:farm",
	});
}

export default Component;
