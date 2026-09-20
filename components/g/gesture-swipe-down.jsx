import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyf0942nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyf0942nx"/>`,
		"fallback": "mdi:gesture-swipe-down",
	});
}

export default Component;
