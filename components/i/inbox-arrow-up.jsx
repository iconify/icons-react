import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt-9l2bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt-9l2bto"/>`,
		"fallback": "mdi:inbox-arrow-up",
	});
}

export default Component;
