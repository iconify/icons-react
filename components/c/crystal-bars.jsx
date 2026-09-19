import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpd1w5bao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpd1w5bao"/>`,
		"fallback": "game-icons:crystal-bars",
	});
}

export default Component;
