import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx5im2b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx5im2b4y"/>`,
		"fallback": "iconoir:google-docs",
	});
}

export default Component;
