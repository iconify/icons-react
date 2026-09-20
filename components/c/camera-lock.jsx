import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilvl92uyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilvl92uyt"/>`,
		"fallback": "mdi:camera-lock",
	});
}

export default Component;
