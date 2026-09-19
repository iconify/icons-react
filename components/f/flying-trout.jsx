import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp37l5bbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp37l5bbd"/>`,
		"fallback": "game-icons:flying-trout",
	});
}

export default Component;
