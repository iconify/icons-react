import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf--k1b3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf--k1b3q"/>`,
		"fallback": "game-icons:india-gate",
	});
}

export default Component;
