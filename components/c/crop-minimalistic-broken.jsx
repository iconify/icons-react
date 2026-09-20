import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/setcevd4e.css';
import '../../css/x/xpvzfm1yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="setcevd4e"/><path class="xpvzfm1yu"/></g>`,
		"fallback": "solar:crop-minimalistic-broken",
	});
}

export default Component;
