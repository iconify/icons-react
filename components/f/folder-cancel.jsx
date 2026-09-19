import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1cg0o4-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1cg0o4-u"/>`,
		"fallback": "griddy-icons:folder-cancel",
	});
}

export default Component;
