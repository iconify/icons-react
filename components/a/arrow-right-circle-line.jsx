import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyo59fb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyo59fb4w"/>`,
		"fallback": "mingcute:arrow-right-circle-line",
	});
}

export default Component;
