import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czgzvkbxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czgzvkbxo"/>`,
		"fallback": "game-icons:beard",
	});
}

export default Component;
