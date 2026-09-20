import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm9l0rbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm9l0rbpc"/>`,
		"fallback": "mingcute:edit-3-ai-line",
	});
}

export default Component;
