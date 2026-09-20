import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq6l3ibbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cq6l3ibbf"/>`,
		"fallback": "token:acala",
	});
}

export default Component;
