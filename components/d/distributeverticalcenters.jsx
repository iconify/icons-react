import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8wl7xb3v.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8wl7xb3v"/>`,
		"fallback": "whh:distributeverticalcenters",
	});
}

export default Component;
