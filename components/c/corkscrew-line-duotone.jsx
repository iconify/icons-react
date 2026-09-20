import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qle2ntjgu.css';
import '../../css/q/qgo3xbcao.css';
import '../../css/p/pxi4ntbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qle2ntjgu"/><path class="qgo3xbcao"/><rect transform="rotate(44.97 12.113 1)" class="pxi4ntbrq"/></g>`,
		"fallback": "solar:corkscrew-line-duotone",
	});
}

export default Component;
