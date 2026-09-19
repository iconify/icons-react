import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do0-t4b8n.css';
import '../../css/q/qf6fzcbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do0-t4b8n"/><path class="qf6fzcbip"/>`,
		"fallback": "boxicons:book-content",
	});
}

export default Component;
