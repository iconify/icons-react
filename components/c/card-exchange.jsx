import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waqu08mrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waqu08mrr"/>`,
		"fallback": "game-icons:card-exchange",
	});
}

export default Component;
