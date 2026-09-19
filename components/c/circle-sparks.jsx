import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj3s65blm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj3s65blm"/>`,
		"fallback": "game-icons:circle-sparks",
	});
}

export default Component;
