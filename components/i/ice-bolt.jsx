import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq13s2klb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq13s2klb"/>`,
		"fallback": "game-icons:ice-bolt",
	});
}

export default Component;
