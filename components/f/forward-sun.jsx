import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwrr1-btw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwrr1-btw"/>`,
		"fallback": "game-icons:forward-sun",
	});
}

export default Component;
