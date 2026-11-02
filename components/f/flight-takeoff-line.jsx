import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfoyag69q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfoyag69q"/>`,
		"fallback": "mingcute:flight-takeoff-line",
	});
}

export default Component;
