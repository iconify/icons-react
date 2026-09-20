import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ianaz7b0e.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/d/db-k4n35p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ianaz7b0e"/><path class="si_mtzbvj"/><path class="db-k4n35p"/></g>`,
		"fallback": "solar:info-square-broken",
	});
}

export default Component;
