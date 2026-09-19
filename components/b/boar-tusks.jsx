import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx7h1gakz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx7h1gakz"/>`,
		"fallback": "game-icons:boar-tusks",
	});
}

export default Component;
