import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exs8hfb-q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exs8hfb-q"/>`,
		"fallback": "game-icons:charging",
	});
}

export default Component;
