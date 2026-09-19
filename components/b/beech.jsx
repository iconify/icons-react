import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf14bmjhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf14bmjhq"/>`,
		"fallback": "game-icons:beech",
	});
}

export default Component;
