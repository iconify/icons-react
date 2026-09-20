import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv5o5wirv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv5o5wirv"/>`,
		"fallback": "mingcute:classify-2-ai-line",
	});
}

export default Component;
