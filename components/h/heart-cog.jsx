import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk13ll61a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk13ll61a"/>`,
		"fallback": "mdi:heart-cog",
	});
}

export default Component;
