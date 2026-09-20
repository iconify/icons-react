import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sc6p54bfo.css';
import '../../css/b/bb07g7bwa.css';
import '../../css/n/ndn_apb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sc6p54bfo"/><path class="bb07g7bwa"/><path class="ndn_apb6u"/></g>`,
		"fallback": "solar:brackets-broken",
	});
}

export default Component;
