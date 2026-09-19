import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe3yhcbry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe3yhcbry"/>`,
		"fallback": "game-icons:hand-of-god",
	});
}

export default Component;
