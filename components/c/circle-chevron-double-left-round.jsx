import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frp7d067u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frp7d067u"/>`,
		"fallback": "coolicons:circle-chevron-double-left-round",
	});
}

export default Component;
