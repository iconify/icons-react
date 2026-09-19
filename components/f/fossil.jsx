import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t01p27bzq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t01p27bzq"/>`,
		"fallback": "game-icons:fossil",
	});
}

export default Component;
