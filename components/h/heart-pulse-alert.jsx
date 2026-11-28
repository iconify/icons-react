import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbtry84gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbtry84gz"/>`,
		"fallback": "noviair-light:heart-pulse-alert",
	});
}

export default Component;
