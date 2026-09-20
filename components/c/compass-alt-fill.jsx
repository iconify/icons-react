import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar2gvbdfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ar2gvbdfo"/>`,
		"fallback": "lets-icons:compass-alt-fill",
	});
}

export default Component;
