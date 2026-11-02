import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1h0yxuds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1h0yxuds"/>`,
		"fallback": "mingcute:fan-direction-front-line",
	});
}

export default Component;
