import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqzm3-bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqzm3-bdk"/>`,
		"fallback": "mingcute:folder-fill",
	});
}

export default Component;
