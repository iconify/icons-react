import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqzly4tsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqzly4tsd"/>`,
		"fallback": "mingcute:flight-takeoff-line",
	});
}

export default Component;
