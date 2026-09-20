import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyh2a17xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyh2a17xs"/>`,
		"fallback": "mingcute:flexibility-line",
	});
}

export default Component;
