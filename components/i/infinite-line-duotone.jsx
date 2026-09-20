import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r05bw2p2s.css';
import '../../css/q/qdv9ntbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r05bw2p2s"/><path class="qdv9ntbvc"/></g>`,
		"fallback": "solar:infinite-line-duotone",
	});
}

export default Component;
