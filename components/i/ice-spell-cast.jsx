import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw06pbbat.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw06pbbat"/>`,
		"fallback": "game-icons:ice-spell-cast",
	});
}

export default Component;
