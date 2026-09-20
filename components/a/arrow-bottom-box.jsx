import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltk4xvbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltk4xvbnm"/>`,
		"fallback": "mdi:arrow-bottom-box",
	});
}

export default Component;
