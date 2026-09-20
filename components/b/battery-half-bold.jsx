import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdt-z8c9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdt-z8c9r"/>`,
		"fallback": "solar:battery-half-bold",
	});
}

export default Component;
