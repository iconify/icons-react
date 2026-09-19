import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lhdlyacht.css';
import '../../css/m/m_t1d5buy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lhdlyacht"/><path class="m_t1d5buy"/></g>`,
		"fallback": "hugeicons:idea-01",
	});
}

export default Component;
