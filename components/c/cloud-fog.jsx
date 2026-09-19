import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tp9n5-bss.css';
import '../../css/o/og71zds_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tp9n5-bss"/><path class="og71zds_g"/></g>`,
		"fallback": "hugeicons:cloud-fog",
	});
}

export default Component;
