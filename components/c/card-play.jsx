import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ermx9q4nx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ermx9q4nx"/>`,
		"fallback": "game-icons:card-play",
	});
}

export default Component;
