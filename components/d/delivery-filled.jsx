import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv86zo07c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv86zo07c"/>`,
		"fallback": "griddy-icons:delivery-filled",
	});
}

export default Component;
