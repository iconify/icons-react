import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loevw9_ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loevw9_ih"/>`,
		"fallback": "griddy-icons:data-cloud-filled",
	});
}

export default Component;
