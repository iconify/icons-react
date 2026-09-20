import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8cde-bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8cde-bay"/>`,
		"fallback": "pixelarticons:cellular-signal-off",
	});
}

export default Component;
