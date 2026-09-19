import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jju025w3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jju025w3f"/>`,
		"fallback": "game-icons:gear-stick",
	});
}

export default Component;
