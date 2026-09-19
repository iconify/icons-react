import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ymd3_9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0ymd3_9j"/>`,
		"fallback": "game-icons:giant-squid",
	});
}

export default Component;
