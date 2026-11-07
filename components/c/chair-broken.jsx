import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzd2qnarn.css';
import '../../css/b/b0469bblh.css';
import '../../css/d/dp6f7rbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zzd2qnarn"/><path class="b0469bblh"/><path class="dp6f7rbss"/></g>`,
		"fallback": "solar:chair-broken",
	});
}

export default Component;
