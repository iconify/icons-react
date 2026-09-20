import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7bbfvb2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7bbfvb2y"/>`,
		"fallback": "ix:folder-application-screen",
	});
}

export default Component;
