import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubrg13b2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubrg13b2p"/>`,
		"fallback": "game-icons:egyptian-temple",
	});
}

export default Component;
