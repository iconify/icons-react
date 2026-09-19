import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0m2jmbmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0m2jmbmm"/>`,
		"fallback": "game-icons:fern",
	});
}

export default Component;
