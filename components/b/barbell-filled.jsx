import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on5k_mb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on5k_mb8n"/>`,
		"fallback": "griddy-icons:barbell-filled",
	});
}

export default Component;
