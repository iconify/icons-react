import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cbx_xq3zq.css';
import '../../css/q/qzek6abxz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cbx_xq3zq"/><path class="qzek6abxz"/></g>`,
		"fallback": "streamline-flex:discussion-converstion-reply",
	});
}

export default Component;
