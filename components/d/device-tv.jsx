import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkcw5h-pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkcw5h-pi"/>`,
		"fallback": "pixelarticons:device-tv",
	});
}

export default Component;
