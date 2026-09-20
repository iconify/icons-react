import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/px5xiwqdn.css';
import '../../css/s/s7-mgi2tv.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="px5xiwqdn"/><path class="s7-mgi2tv"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "solar:gallery-circle-linear",
	});
}

export default Component;
