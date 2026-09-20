import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z94t_73gm.css';
import '../../css/d/dqoud86nz.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/e/ehgcfqbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z94t_73gm"/><path class="dqoud86nz"/><path class="ktpncgb0v"/><path class="ehgcfqbdl"/></g>`,
		"fallback": "solar:card-transfer-broken",
	});
}

export default Component;
