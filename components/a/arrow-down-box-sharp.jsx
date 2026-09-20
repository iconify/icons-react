import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmh8azp6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmh8azp6e"/>`,
		"fallback": "pixelarticons:arrow-down-box-sharp",
	});
}

export default Component;
