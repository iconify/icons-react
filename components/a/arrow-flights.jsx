import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5t4rgbxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5t4rgbxo"/>`,
		"fallback": "game-icons:arrow-flights",
	});
}

export default Component;
