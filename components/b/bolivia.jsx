import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8rq7tskk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8rq7tskk"/>`,
		"fallback": "game-icons:bolivia",
	});
}

export default Component;
