import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_-9aua6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_-9aua6d"/>`,
		"fallback": "si:drag-indicator-duotone",
	});
}

export default Component;
