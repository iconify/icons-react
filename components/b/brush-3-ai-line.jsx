import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3zm5rp-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3zm5rp-l"/>`,
		"fallback": "mingcute:brush-3-ai-line",
	});
}

export default Component;
