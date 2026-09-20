import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecdxl0m7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecdxl0m7a"/>`,
		"fallback": "pixelarticons:gear",
	});
}

export default Component;
