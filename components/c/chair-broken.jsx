import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzd2qnarn.css';
import '../../css/e/e1el7ublr.css';
import '../../css/o/oofp69bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zzd2qnarn"/><path class="e1el7ublr"/><path class="oofp69bmh"/></g>`,
		"fallback": "solar:chair-broken",
	});
}

export default Component;
