import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqfj8n7ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqfj8n7ce"/>`,
		"fallback": "mdi:drag",
	});
}

export default Component;
