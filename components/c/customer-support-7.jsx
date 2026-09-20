import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s8k1eabdn.css';
import '../../css/y/ycf_l2bnq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s8k1eabdn"/><path class="ycf_l2bnq"/></g>`,
		"fallback": "streamline-flex:customer-support-7",
	});
}

export default Component;
