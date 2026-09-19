import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqxme1b1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqxme1b1i"/>`,
		"fallback": "game-icons:belt-armor",
	});
}

export default Component;
