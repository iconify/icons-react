import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkqathb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkqathb3u"/>`,
		"fallback": "coolicons:arrow-u-turn-right-down-bulk-round",
	});
}

export default Component;
