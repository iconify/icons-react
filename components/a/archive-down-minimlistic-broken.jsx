import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cmvazjgux.css';
import '../../css/t/t6vi4ublf.css';
import '../../css/l/lz7dz2q5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cmvazjgux"/><path class="t6vi4ublf"/><path class="lz7dz2q5p"/></g>`,
		"fallback": "solar:archive-down-minimlistic-broken",
	});
}

export default Component;
