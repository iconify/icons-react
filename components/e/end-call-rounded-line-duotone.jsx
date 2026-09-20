import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c8m_36b0p.css';
import '../../css/m/mkh2lzbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c8m_36b0p"/><path class="mkh2lzbau"/></g>`,
		"fallback": "solar:end-call-rounded-line-duotone",
	});
}

export default Component;
