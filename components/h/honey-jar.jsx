import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/defjssb6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="defjssb6o"/>`,
		"fallback": "game-icons:honey-jar",
	});
}

export default Component;
