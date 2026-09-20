import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap0-habhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap0-habhx"/>`,
		"fallback": "mdi:circle-box-outline",
	});
}

export default Component;
