import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-b0mlbul.css';
import '../../css/i/i5s91diaq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-b0mlbul"/><path class="i5s91diaq"/>`,
		"fallback": "energy-icons:charger-dual-20-bold",
	});
}

export default Component;
