import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf4k8s7-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf4k8s7-p"/>`,
		"fallback": "mdi:folder-outline",
	});
}

export default Component;
