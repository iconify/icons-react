import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo_akvmhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo_akvmhg"/>`,
		"fallback": "game-icons:film-spool",
	});
}

export default Component;
