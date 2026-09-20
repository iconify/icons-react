import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/y/yh5dhmb9o.css';
import '../../css/d/da7qzz6_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><circle class="yh5dhmb9o"/><path class="da7qzz6_s"/></g>`,
		"fallback": "solar:folder-clock-linear",
	});
}

export default Component;
