import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqx1n_x7l.css';
import '../../css/l/lbt39w0vi.css';
import '../../css/r/rth5aubws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aqx1n_x7l"/><path class="lbt39w0vi"/><path class="rth5aubws"/></g>`,
		"fallback": "hugeicons:headset-off",
	});
}

export default Component;
