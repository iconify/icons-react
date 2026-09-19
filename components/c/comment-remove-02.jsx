import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n4ed50vxc.css';
import '../../css/w/wl_e0fb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n4ed50vxc"/><path class="wl_e0fb9e"/></g>`,
		"fallback": "hugeicons:comment-remove-02",
	});
}

export default Component;
