import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g8gy9vy8e.css';
import '../../css/w/w6otkg_un.css';
import '../../css/w/w2fbwab-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g8gy9vy8e"/><path class="w6otkg_un"/><path class="w2fbwab-k"/></g>`,
		"fallback": "iconoir:bonfire",
	});
}

export default Component;
