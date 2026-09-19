import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prx_0ebow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prx_0ebow"/>`,
		"fallback": "game-icons:bouncing-spring",
	});
}

export default Component;
