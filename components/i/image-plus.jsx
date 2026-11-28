import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldqit5bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldqit5bct"/>`,
		"fallback": "noviair-light:image-plus",
	});
}

export default Component;
