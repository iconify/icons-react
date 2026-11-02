import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5o--ebvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5o--ebvq"/>`,
		"fallback": "mingcute:dots-horizontal-line",
	});
}

export default Component;
