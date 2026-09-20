import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frqrtvifx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frqrtvifx"/>`,
		"fallback": "tabler:droplet-pause",
	});
}

export default Component;
