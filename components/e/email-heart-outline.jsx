import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utwwo2jbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utwwo2jbm"/>`,
		"fallback": "mdi:email-heart-outline",
	});
}

export default Component;
