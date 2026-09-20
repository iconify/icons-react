import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftewb93xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftewb93xi"/>`,
		"fallback": "mdi:cog-pause-outline",
	});
}

export default Component;
