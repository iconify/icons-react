import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn1me5brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn1me5brv"/>`,
		"fallback": "mdi:ammunition-rifle",
	});
}

export default Component;
