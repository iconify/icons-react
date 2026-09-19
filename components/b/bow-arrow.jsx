import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/go8n5wb-e.css';
import '../../css/z/zg0r7wb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="go8n5wb-e"/><path class="zg0r7wb6j"/></g>`,
		"fallback": "hugeicons:bow-arrow",
	});
}

export default Component;
