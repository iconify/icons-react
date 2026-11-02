import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbby8qbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbby8qbpl"/>`,
		"fallback": "mingcute:classify-ai-line",
	});
}

export default Component;
