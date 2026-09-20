import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh-4zob8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh-4zob8n"/>`,
		"fallback": "mdi:billiards-triangle",
	});
}

export default Component;
