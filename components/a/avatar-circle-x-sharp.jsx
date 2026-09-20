import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi1mumb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi1mumb_y"/>`,
		"fallback": "pixelarticons:avatar-circle-x-sharp",
	});
}

export default Component;
