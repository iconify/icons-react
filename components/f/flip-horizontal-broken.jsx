import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzi-2vfyi.css';
import '../../css/s/s9_zw2bis.css';
import '../../css/p/pm1ejrbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zzi-2vfyi"/><path class="s9_zw2bis"/><path class="pm1ejrbhe"/></g>`,
		"fallback": "solar:flip-horizontal-broken",
	});
}

export default Component;
