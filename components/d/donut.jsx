import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqon8bbao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqon8bbao"/>`,
		"fallback": "game-icons:donut",
	});
}

export default Component;
