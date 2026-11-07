import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vq8p2ub8p.css';
import '../../css/k/koojm6b6e.css';
import '../../css/g/gg51fnb0j.css';
import '../../css/r/rultmacqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vq8p2ub8p"/><path class="koojm6b6e"/><path class="gg51fnb0j"/><path class="rultmacqq"/></g>`,
		"fallback": "solar:blocks-broken",
	});
}

export default Component;
