import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wbfh0nbac.css';
import '../../css/i/inwi76h2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wbfh0nbac"/><path class="inwi76h2u"/></g>`,
		"fallback": "streamline-ultimate:arrange-list-descending",
	});
}

export default Component;
