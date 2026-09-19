import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dub6k1bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dub6k1bkl"/>`,
		"fallback": "flowbite:droplet-bottle-alt-outline",
	});
}

export default Component;
