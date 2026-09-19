import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v819-jb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v819-jb_q"/>`,
		"fallback": "game-icons:chopsticks",
	});
}

export default Component;
