import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn8yi_w7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn8yi_w7b"/>`,
		"fallback": "game-icons:galleon",
	});
}

export default Component;
