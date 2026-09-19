import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozf1p_y8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozf1p_y8p"/>`,
		"fallback": "game-icons:ice-golem",
	});
}

export default Component;
