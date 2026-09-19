import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr_k8vliz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yr_k8vliz"/>`,
		"fallback": "griddy-icons:folder-blocked-filled",
	});
}

export default Component;
