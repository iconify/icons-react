import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yn0ngabmr.css';
import '../../css/n/nndzv3xzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yn0ngabmr"/><path class="nndzv3xzu"/></g>`,
		"fallback": "hugeicons:ai-folder-01",
	});
}

export default Component;
