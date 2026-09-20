import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d_h808bhb.css';
import '../../css/l/lw698rb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d_h808bhb"/><path class="lw698rb2q"/></g>`,
		"fallback": "solar:box-minimalistic-line-duotone",
	});
}

export default Component;
