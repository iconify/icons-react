import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkp8n4jck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkp8n4jck"/>`,
		"fallback": "noviair-light:building",
	});
}

export default Component;
