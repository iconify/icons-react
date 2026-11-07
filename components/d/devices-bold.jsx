import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9benlbfz.css';
import '../../css/k/kemsso1tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9benlbfz"/><path clip-rule="evenodd" class="kemsso1tv"/>`,
		"fallback": "solar:devices-bold",
	});
}

export default Component;
