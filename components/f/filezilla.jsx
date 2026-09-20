import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihulpbbfd.css';
import '../../css/g/gppy3kbck.css';
import '../../css/b/bcdw-_bgq.css';
import '../../css/w/wzq1crbek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGePBHwz4H" x1="191.837" x2="191.837" y1="457.842" y2="275.94" gradientTransform="matrix(2.1744 0 0 -2.1744 -161.139 1057.692)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ihulpbbfd"/><stop offset="1" class="gppy3kbck"/></linearGradient><path fill="url(#SVGePBHwz4H)" class="bcdw-_bgq"/><path class="wzq1crbek"/>`,
		"fallback": "selfhst:filezilla",
	});
}

export default Component;
