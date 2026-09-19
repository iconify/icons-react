import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9g86ihie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9g86ihie"/>`,
		"fallback": "game-icons:basket",
	});
}

export default Component;
