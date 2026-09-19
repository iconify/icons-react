import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou22gibla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou22gibla"/>`,
		"fallback": "game-icons:fruit-tree",
	});
}

export default Component;
