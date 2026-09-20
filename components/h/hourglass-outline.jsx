import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtg44vu4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vtg44vu4p"/>`,
		"fallback": "solar:hourglass-outline",
	});
}

export default Component;
