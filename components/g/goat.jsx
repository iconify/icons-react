import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spaeb_25g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spaeb_25g"/>`,
		"fallback": "game-icons:goat",
	});
}

export default Component;
