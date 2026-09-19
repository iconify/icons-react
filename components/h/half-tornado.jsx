import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqz63qbkm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqz63qbkm"/>`,
		"fallback": "game-icons:half-tornado",
	});
}

export default Component;
