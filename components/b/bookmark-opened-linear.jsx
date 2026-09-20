import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/v/vs93q9bgg.css';
import '../../css/n/na9l3_b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="vs93q9bgg"/><path class="na9l3_b7s"/></g>`,
		"fallback": "solar:bookmark-opened-linear",
	});
}

export default Component;
