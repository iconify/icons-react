import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d6yf8nbqe.css';
import '../../css/h/hfjwbrilq.css';
import '../../css/p/pxi4ntbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d6yf8nbqe"/><path class="hfjwbrilq"/><rect transform="rotate(44.97 12.113 1)" class="pxi4ntbrq"/></g>`,
		"fallback": "solar:corkscrew-linear",
	});
}

export default Component;
