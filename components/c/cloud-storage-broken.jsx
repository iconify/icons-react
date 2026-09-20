import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kllacmrbx.css';
import '../../css/p/p22a86b8e.css';
import '../../css/k/kbry1wb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kllacmrbx"/><path class="p22a86b8e"/><path class="kbry1wb0i"/></g>`,
		"fallback": "solar:cloud-storage-broken",
	});
}

export default Component;
