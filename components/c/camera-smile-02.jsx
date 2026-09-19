import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kw8enf78q.css';
import '../../css/v/vkfcnv4wi.css';
import '../../css/q/qbzh04khg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kw8enf78q"/><path class="vkfcnv4wi"/><path class="qbzh04khg"/></g>`,
		"fallback": "hugeicons:camera-smile-02",
	});
}

export default Component;
