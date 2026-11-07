import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vznejxznx.css';
import '../../css/o/owkak0bth.css';
import '../../css/n/nfclxdb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vznejxznx"/><path class="owkak0bth"/><path class="nfclxdb-l"/></g>`,
		"fallback": "solar:chat-round-off-linear",
	});
}

export default Component;
