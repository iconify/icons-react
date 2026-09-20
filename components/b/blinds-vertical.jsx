import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvc_kgbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvc_kgbsu"/>`,
		"fallback": "mdi:blinds-vertical",
	});
}

export default Component;
