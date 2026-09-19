import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/scnmq5cqr.css';
import '../../css/a/a3j2nswyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="scnmq5cqr"/><path class="a3j2nswyb"/></g>`,
		"fallback": "hugeicons:ai-laptop",
	});
}

export default Component;
