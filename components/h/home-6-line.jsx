import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amm1rn32k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amm1rn32k"/>`,
		"fallback": "mingcute:home-6-line",
	});
}

export default Component;
