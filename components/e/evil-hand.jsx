import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu5qq_bkz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu5qq_bkz"/>`,
		"fallback": "game-icons:evil-hand",
	});
}

export default Component;
