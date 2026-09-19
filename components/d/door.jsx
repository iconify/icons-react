import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/os_tdyjga.css';
import '../../css/g/gcohp_b3e.css';
import '../../css/n/ndz3s8e5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="os_tdyjga"/><path class="gcohp_b3e"/><path class="ndz3s8e5k"/></g>`,
		"fallback": "hugeicons:door",
	});
}

export default Component;
