import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bhy-axcbm.css';
import '../../css/g/gzrq2q87p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bhy-axcbm"/><path class="gzrq2q87p"/></g>`,
		"fallback": "solar:circle-bottom-up-linear",
	});
}

export default Component;
