import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjzuz0oew.css';
import '../../css/d/dfd8n3ylg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjzuz0oew"/><path clip-rule="evenodd" class="dfd8n3ylg"/>`,
		"fallback": "solar:bell-bing-outline",
	});
}

export default Component;
