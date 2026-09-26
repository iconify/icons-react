import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t60_6fbkn.css';
import '../../css/n/n6gwi0b2o.css';
import '../../css/g/g2e37sboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t60_6fbkn"/><path class="n6gwi0b2o"/><path class="g2e37sboy"/></g>`,
		"fallback": "solar:copy-minus-broken",
	});
}

export default Component;
