import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfoxkd_6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfoxkd_6z"/>`,
		"fallback": "mingcute:home-6-line",
	});
}

export default Component;
