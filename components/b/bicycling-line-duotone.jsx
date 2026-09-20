import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/v/vu97hgmrr.css';
import '../../css/y/ym7z_obxz.css';
import '../../css/t/t0qqdlbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><circle class="vu97hgmrr"/><circle class="ym7z_obxz"/><path class="t0qqdlbhd"/></g>`,
		"fallback": "solar:bicycling-line-duotone",
	});
}

export default Component;
