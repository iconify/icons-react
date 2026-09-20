import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy4myc37i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy4myc37i"/>`,
		"fallback": "mdi:funnel-settings-outline",
	});
}

export default Component;
