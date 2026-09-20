import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2mflz02z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2mflz02z"/>`,
		"fallback": "mingcute:dogecoin-doge-line",
	});
}

export default Component;
