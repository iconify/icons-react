import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw1-d_wqb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw1-d_wqb"/>`,
		"fallback": "game-icons:golf-tee",
	});
}

export default Component;
