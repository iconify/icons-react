import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ai-_1e1ij.css';
import '../../css/b/bzy10pblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ai-_1e1ij"/><path class="bzy10pblu"/></g>`,
		"fallback": "solar:end-call-broken",
	});
}

export default Component;
