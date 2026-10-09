import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id3fg2b_m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id3fg2b_m"/>`,
		"fallback": "energy-icons:droplet-20",
	});
}

export default Component;
