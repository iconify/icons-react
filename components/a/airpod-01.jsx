import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q_3rpubuu.css';
import '../../css/i/irijcsolg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q_3rpubuu"/><rect class="irijcsolg"/></g>`,
		"fallback": "hugeicons:airpod-01",
	});
}

export default Component;
