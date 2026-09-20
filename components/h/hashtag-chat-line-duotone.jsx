import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwcfj9bbi.css';
import '../../css/z/zge0robxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hwcfj9bbi"/><path class="zge0robxs"/></g>`,
		"fallback": "solar:hashtag-chat-line-duotone",
	});
}

export default Component;
