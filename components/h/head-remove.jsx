import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkm46bb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkm46bb0x"/>`,
		"fallback": "mdi:head-remove",
	});
}

export default Component;
