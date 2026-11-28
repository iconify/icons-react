import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccb16yb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccb16yb8d"/>`,
		"fallback": "noviair-light:image",
	});
}

export default Component;
