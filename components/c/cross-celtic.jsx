import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phryi43km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phryi43km"/>`,
		"fallback": "mdi:cross-celtic",
	});
}

export default Component;
