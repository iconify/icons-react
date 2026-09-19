import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p1pnmsopg.css';
import '../../css/k/k8m56etkf.css';
import '../../css/h/hfw6dysas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p1pnmsopg"/><path class="k8m56etkf"/><path class="hfw6dysas"/></g>`,
		"fallback": "hugeicons:garage",
	});
}

export default Component;
