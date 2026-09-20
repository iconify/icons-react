import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/j/j5s7abbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><circle class="dos_yhbgg"/><circle class="ez1x61b2a"/><path class="j5s7abbmv"/></g>`,
		"fallback": "solar:bicycling-broken",
	});
}

export default Component;
