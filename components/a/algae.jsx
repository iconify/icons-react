import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5n77-2_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5n77-2_w"/>`,
		"fallback": "game-icons:algae",
	});
}

export default Component;
