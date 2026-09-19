import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmx42-grk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmx42-grk"/>`,
		"fallback": "game-icons:heaven-gate",
	});
}

export default Component;
