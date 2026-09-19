import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kk-2hwbmm.css';
import '../../css/w/wkn46nb_i.css';
import '../../css/g/gf3fkwbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="kk-2hwbmm"/><path class="wkn46nb_i"/><path class="gf3fkwbky"/></g>`,
		"fallback": "hugeicons:golf-ball",
	});
}

export default Component;
