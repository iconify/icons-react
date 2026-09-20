import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kfl35sbdh.css';
import '../../css/k/k0ve8l5ll.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kfl35sbdh"/><path class="k0ve8l5ll"/></g>`,
		"fallback": "streamline:discount-percent-fire",
	});
}

export default Component;
