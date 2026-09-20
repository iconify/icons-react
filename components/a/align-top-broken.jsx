import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qqrohvb8p.css';
import '../../css/i/i9spxybks.css';
import '../../css/c/cts3slb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qqrohvb8p"/><path class="i9spxybks"/><path class="cts3slb-i"/></g>`,
		"fallback": "solar:align-top-broken",
	});
}

export default Component;
