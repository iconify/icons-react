import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9iptvk5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9iptvk5n"/>`,
		"fallback": "game-icons:card-4-diamonds",
	});
}

export default Component;
