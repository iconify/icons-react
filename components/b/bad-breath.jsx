import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ridum6bct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ridum6bct"/>`,
		"fallback": "game-icons:bad-breath",
	});
}

export default Component;
