import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yivttkrvg.css';
import '../../css/i/iac4se_hi.css';
import '../../css/r/rlx_edbba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yivttkrvg"/><path class="iac4se_hi"/><path class="rlx_edbba"/></g>`,
		"fallback": "streamline-flex:browser-bookmark",
	});
}

export default Component;
