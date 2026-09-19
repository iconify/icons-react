import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmda_m7nl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmda_m7nl"/>`,
		"fallback": "game-icons:gold-nuggets",
	});
}

export default Component;
