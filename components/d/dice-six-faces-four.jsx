import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3q08y8ew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3q08y8ew"/>`,
		"fallback": "game-icons:dice-six-faces-four",
	});
}

export default Component;
