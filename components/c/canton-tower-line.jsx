import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz63apbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz63apbfd"/>`,
		"fallback": "mingcute:canton-tower-line",
	});
}

export default Component;
