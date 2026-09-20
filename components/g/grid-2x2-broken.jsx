import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s6deurbms.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/p/pob85mb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s6deurbms"/><path class="si_mtzbvj"/><path class="pob85mb3x"/></g>`,
		"fallback": "solar:grid-2x2-broken",
	});
}

export default Component;
