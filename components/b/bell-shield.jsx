import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og_b7ebls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og_b7ebls"/>`,
		"fallback": "game-icons:bell-shield",
	});
}

export default Component;
