import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ug8u6fb_r.css';
import '../../css/b/bm4ygpbsy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ug8u6fb_r"/><path class="bm4ygpbsy"/></g>`,
		"fallback": "streamline:coin-share",
	});
}

export default Component;
