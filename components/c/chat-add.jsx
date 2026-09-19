import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aatk8ws5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aatk8ws5r"/>`,
		"fallback": "iconoir:chat-add",
	});
}

export default Component;
