import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp072-bjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp072-bjg"/>`,
		"fallback": "game-icons:crossed-swords",
	});
}

export default Component;
