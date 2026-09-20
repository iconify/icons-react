import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z2b-kbctu.css';
import '../../css/k/k7-aqdbwy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z2b-kbctu"/><path class="k7-aqdbwy"/></g>`,
		"fallback": "streamline:box-sign",
	});
}

export default Component;
