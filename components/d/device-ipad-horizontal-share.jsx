import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rezryb9cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rezryb9cd"/>`,
		"fallback": "tabler:device-ipad-horizontal-share",
	});
}

export default Component;
