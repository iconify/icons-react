import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wncevmksb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wncevmksb"/>`,
		"fallback": "mdi:arrow-right-box",
	});
}

export default Component;
