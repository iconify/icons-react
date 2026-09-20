import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ad-hbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8ad-hbmx"/>`,
		"fallback": "lets-icons:arrow-right",
	});
}

export default Component;
