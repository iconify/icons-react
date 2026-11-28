import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jis16yg7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jis16yg7o primary"/>`,
		"fallback": "iconaut:droplet-duotone",
	});
}

export default Component;
