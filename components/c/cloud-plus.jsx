import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrt-b3b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrt-b3b-c"/>`,
		"fallback": "noviair-light:cloud-plus",
	});
}

export default Component;
