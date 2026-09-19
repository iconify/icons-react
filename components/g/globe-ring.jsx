import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8d1w2iyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8d1w2iyu"/>`,
		"fallback": "game-icons:globe-ring",
	});
}

export default Component;
