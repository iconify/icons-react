import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/css53jdil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="css53jdil"/>`,
		"fallback": "game-icons:helicopter-tail",
	});
}

export default Component;
