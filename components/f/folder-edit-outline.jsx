import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vue9vbuek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vue9vbuek"/>`,
		"fallback": "mdi:folder-edit-outline",
	});
}

export default Component;
