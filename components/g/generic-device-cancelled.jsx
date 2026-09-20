import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxa8g1uva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxa8g1uva"/>`,
		"fallback": "ix:generic-device-cancelled",
	});
}

export default Component;
