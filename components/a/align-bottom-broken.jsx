import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tkfxeb0-d.css';
import '../../css/l/la_bbw7rm.css';
import '../../css/b/bz0iknbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tkfxeb0-d"/><path class="la_bbw7rm"/><path class="bz0iknbec"/></g>`,
		"fallback": "solar:align-bottom-broken",
	});
}

export default Component;
