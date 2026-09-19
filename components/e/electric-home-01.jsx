import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i05myjrjr.css';
import '../../css/h/hfq_gq9lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i05myjrjr"/><path class="hfq_gq9lt"/></g>`,
		"fallback": "hugeicons:electric-home-01",
	});
}

export default Component;
