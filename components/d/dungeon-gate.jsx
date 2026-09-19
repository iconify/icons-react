import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoj1bbclk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoj1bbclk"/>`,
		"fallback": "game-icons:dungeon-gate",
	});
}

export default Component;
