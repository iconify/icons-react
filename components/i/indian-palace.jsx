import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pclguk7kg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pclguk7kg"/>`,
		"fallback": "game-icons:indian-palace",
	});
}

export default Component;
