import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-hxbz97p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-hxbz97p"/>`,
		"fallback": "tabler:droplet-half-2-filled",
	});
}

export default Component;
