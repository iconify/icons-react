import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgaal2y-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgaal2y-x"/>`,
		"fallback": "game-icons:doner-kebab",
	});
}

export default Component;
