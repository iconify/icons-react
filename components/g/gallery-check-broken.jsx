import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l60a6dbzb.css';
import '../../css/l/lgbc9yk3h.css';
import '../../css/q/qw59k8t0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l60a6dbzb"/><path class="lgbc9yk3h"/><path class="qw59k8t0z"/></g>`,
		"fallback": "solar:gallery-check-broken",
	});
}

export default Component;
