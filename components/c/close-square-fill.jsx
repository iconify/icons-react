import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waajk0n2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waajk0n2q"/>`,
		"fallback": "mingcute:close-square-fill",
	});
}

export default Component;
