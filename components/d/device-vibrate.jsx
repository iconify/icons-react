import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cly2z6b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cly2z6b1t"/>`,
		"fallback": "pixelarticons:device-vibrate",
	});
}

export default Component;
