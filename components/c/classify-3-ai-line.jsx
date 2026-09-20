import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwg-msb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwg-msb6r"/>`,
		"fallback": "mingcute:classify-3-ai-line",
	});
}

export default Component;
