import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsen8tbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hsen8tbdi"/>`,
		"fallback": "griddy-icons:grid-filled",
	});
}

export default Component;
