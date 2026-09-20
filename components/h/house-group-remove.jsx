import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg41-xbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg41-xbce"/>`,
		"fallback": "mdi:house-group-remove",
	});
}

export default Component;
