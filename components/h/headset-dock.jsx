import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcg6f8bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcg6f8bjk"/>`,
		"fallback": "mdi:headset-dock",
	});
}

export default Component;
