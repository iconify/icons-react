import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmee-3b8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmee-3b8q"/>`,
		"fallback": "game-icons:cactus-pot",
	});
}

export default Component;
