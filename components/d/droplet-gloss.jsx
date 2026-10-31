import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqeu97e5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqeu97e5j wm-k"/>`,
		"fallback": "withicons:droplet-gloss",
	});
}

export default Component;
