import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sekq7wn5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sekq7wn5w"/>`,
		"fallback": "game-icons:crossed-pistols",
	});
}

export default Component;
