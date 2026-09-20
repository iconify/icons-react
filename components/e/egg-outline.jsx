import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clg852-dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clg852-dm"/>`,
		"fallback": "mdi:egg-outline",
	});
}

export default Component;
