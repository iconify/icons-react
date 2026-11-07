import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mhr7z56ym.css';
import '../../css/m/mp18y-ypb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mhr7z56ym"/><path class="mp18y-ypb"/></g>`,
		"fallback": "solar:chat-round-check-broken",
	});
}

export default Component;
