import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8e5vfbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8e5vfbuu"/>`,
		"fallback": "pixelarticons:debug-stop",
	});
}

export default Component;
