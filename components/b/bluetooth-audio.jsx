import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjku7rbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjku7rbju"/>`,
		"fallback": "mdi:bluetooth-audio",
	});
}

export default Component;
