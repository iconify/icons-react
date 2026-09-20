import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gypo4-b5z.css';
import '../../css/l/lgp-8qlsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gypo4-b5z"/><path class="lgp-8qlsy"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-down-duotone",
	});
}

export default Component;
