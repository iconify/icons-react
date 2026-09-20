import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db3x8nb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db3x8nb0r"/>`,
		"fallback": "mdi:content-save-outline",
	});
}

export default Component;
