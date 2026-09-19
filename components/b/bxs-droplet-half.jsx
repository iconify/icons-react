import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikb0k8gli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikb0k8gli"/>`,
		"fallback": "bx:bxs-droplet-half",
	});
}

export default Component;
