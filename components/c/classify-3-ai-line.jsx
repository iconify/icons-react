import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it_td9u6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it_td9u6i"/>`,
		"fallback": "mingcute:classify-3-ai-line",
	});
}

export default Component;
