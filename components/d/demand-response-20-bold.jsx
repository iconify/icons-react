import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtrypjbye.css';
import '../../css/d/dmyxypbyy.css';
import '../../css/b/bc7iv7cyj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtrypjbye"/><path class="dmyxypbyy"/><path class="bc7iv7cyj"/>`,
		"fallback": "energy-icons:demand-response-20-bold",
	});
}

export default Component;
