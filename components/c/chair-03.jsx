import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vtp4a5b4h.css';
import '../../css/c/clcl6lb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vtp4a5b4h"/><path class="clcl6lb0b"/></g>`,
		"fallback": "hugeicons:chair-03",
	});
}

export default Component;
