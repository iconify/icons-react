import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3locczqy.css';
import '../../css/j/ji9rt6bca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3locczqy"/><path class="ji9rt6bca"/></g>`,
		"fallback": "coolicons:cloud-snow-duotone-round",
	});
}

export default Component;
