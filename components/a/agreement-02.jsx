import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fl2dswoii.css';
import '../../css/x/xmnq_pcgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fl2dswoii"/><path class="xmnq_pcgr"/></g>`,
		"fallback": "hugeicons:agreement-02",
	});
}

export default Component;
