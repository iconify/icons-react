import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxhz6yb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxhz6yb6v"/>`,
		"fallback": "noviair-light:award",
	});
}

export default Component;
