import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbn6__bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbn6__bej"/>`,
		"fallback": "tabler:arrows-down",
	});
}

export default Component;
