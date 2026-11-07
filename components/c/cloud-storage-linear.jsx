import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwj2w_bps.css';
import '../../css/w/w3q7kyo9a.css';
import '../../css/k/kbry1wb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gwj2w_bps"/><path class="w3q7kyo9a"/><path class="kbry1wb0i"/></g>`,
		"fallback": "solar:cloud-storage-linear",
	});
}

export default Component;
