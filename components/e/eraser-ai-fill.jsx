import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm_pr0vcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm_pr0vcp"/>`,
		"fallback": "mingcute:eraser-ai-fill",
	});
}

export default Component;
