import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcyq56q4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcyq56q4t"/>`,
		"fallback": "pixelarticons:device-watch",
	});
}

export default Component;
