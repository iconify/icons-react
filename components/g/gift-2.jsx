import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d55rflb_d.css';
import '../../css/k/k_o_20bqw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d55rflb_d"/><path class="k_o_20bqw"/></g>`,
		"fallback": "streamline-flex:gift-2",
	});
}

export default Component;
