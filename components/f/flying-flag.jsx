import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyq595bou.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyq595bou"/>`,
		"fallback": "game-icons:flying-flag",
	});
}

export default Component;
