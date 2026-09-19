import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dexi62w-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dexi62w-a"/>`,
		"fallback": "game-icons:ace",
	});
}

export default Component;
