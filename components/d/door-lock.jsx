import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo0733_-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo0733_-v"/>`,
		"fallback": "noviair:door-lock",
	});
}

export default Component;
