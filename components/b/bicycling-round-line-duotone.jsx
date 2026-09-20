import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrtq9bbsf.css';
import '../../css/v/vu97hgmrr.css';
import '../../css/y/ym7z_obxz.css';
import '../../css/n/nuz684-gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="mrtq9bbsf"/><circle class="vu97hgmrr"/><circle class="ym7z_obxz"/><path class="nuz684-gh"/></g>`,
		"fallback": "solar:bicycling-round-line-duotone",
	});
}

export default Component;
