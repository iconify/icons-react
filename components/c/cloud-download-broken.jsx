import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gygrs8b5s.css';
import '../../css/k/kpngb8ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gygrs8b5s"/><path class="kpngb8ble"/></g>`,
		"fallback": "solar:cloud-download-broken",
	});
}

export default Component;
