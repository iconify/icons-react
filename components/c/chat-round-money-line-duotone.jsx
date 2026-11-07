import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/snto2-zvc.css';
import '../../css/t/tnr318bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="snto2-zvc"/><path class="tnr318bag"/></g>`,
		"fallback": "solar:chat-round-money-line-duotone",
	});
}

export default Component;
