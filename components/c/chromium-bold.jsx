import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei6qdubbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ei6qdubbh"/>`,
		"fallback": "streamline-ultimate:chromium-bold",
	});
}

export default Component;
