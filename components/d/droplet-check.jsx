import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fujf2-end.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fujf2-end"/>`,
		"fallback": "iconoir:droplet-check",
	});
}

export default Component;
