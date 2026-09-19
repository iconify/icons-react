import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s2bw_v66h.css';
import '../../css/d/d-mf1abxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s2bw_v66h"/><path class="d-mf1abxf"/></g>`,
		"fallback": "hugeicons:electric-home-02",
	});
}

export default Component;
