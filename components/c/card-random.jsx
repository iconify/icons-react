import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7k6u3b2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7k6u3b2p"/>`,
		"fallback": "game-icons:card-random",
	});
}

export default Component;
