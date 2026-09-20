import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d9spuifxb.css';
import '../../css/q/qiq57tbph.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d9spuifxb"/><path class="qiq57tbph"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:bones-broken",
	});
}

export default Component;
