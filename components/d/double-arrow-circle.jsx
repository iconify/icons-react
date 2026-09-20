import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vmz4ktb6n.css';
import '../../css/i/iy_cxdwwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vmz4ktb6n"/><path class="iy_cxdwwc"/></g>`,
		"fallback": "mage:double-arrow-circle",
	});
}

export default Component;
