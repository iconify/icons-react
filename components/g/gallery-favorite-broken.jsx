import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qw59k8t0z.css';
import '../../css/l/lgbc9yk3h.css';
import '../../css/n/n57mawbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qw59k8t0z"/><path class="lgbc9yk3h"/><path class="n57mawbaq"/></g>`,
		"fallback": "solar:gallery-favorite-broken",
	});
}

export default Component;
