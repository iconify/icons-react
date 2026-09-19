import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgh5s1vxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgh5s1vxj"/>`,
		"fallback": "game-icons:abstract-049",
	});
}

export default Component;
