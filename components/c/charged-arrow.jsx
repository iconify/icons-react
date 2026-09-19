import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9z8qybkm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9z8qybkm"/>`,
		"fallback": "game-icons:charged-arrow",
	});
}

export default Component;
