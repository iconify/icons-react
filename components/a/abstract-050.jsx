import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk4t1gb1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk4t1gb1i"/>`,
		"fallback": "game-icons:abstract-050",
	});
}

export default Component;
