import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu0i6sb0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu0i6sb0y"/>`,
		"fallback": "game-icons:drop-earrings",
	});
}

export default Component;
