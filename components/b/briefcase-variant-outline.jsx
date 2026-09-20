import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm6z-nwnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm6z-nwnu"/>`,
		"fallback": "mdi:briefcase-variant-outline",
	});
}

export default Component;
