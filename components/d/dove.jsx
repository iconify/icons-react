import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsojb92fe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsojb92fe"/>`,
		"fallback": "game-icons:dove",
	});
}

export default Component;
