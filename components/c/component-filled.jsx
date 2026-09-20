import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy5eb7m4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy5eb7m4t"/>`,
		"fallback": "reicon:component-filled",
	});
}

export default Component;
