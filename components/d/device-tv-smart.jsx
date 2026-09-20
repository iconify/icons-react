import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjp3glbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjp3glbze"/>`,
		"fallback": "pixelarticons:device-tv-smart",
	});
}

export default Component;
