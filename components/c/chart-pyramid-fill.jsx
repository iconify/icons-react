import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbo9cf8pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbo9cf8pi"/>`,
		"fallback": "keyline-icons:chart-pyramid-fill",
	});
}

export default Component;
