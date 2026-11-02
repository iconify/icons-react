import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkz182ngp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkz182ngp"/>`,
		"fallback": "mingcute:chat-2-ai-line",
	});
}

export default Component;
