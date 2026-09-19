import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfai0kb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfai0kb2m"/>`,
		"fallback": "game-icons:duel",
	});
}

export default Component;
