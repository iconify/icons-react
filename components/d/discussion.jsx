import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc96r_bum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc96r_bum"/>`,
		"fallback": "game-icons:discussion",
	});
}

export default Component;
