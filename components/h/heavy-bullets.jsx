import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/setq1eb9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="setq1eb9e"/>`,
		"fallback": "game-icons:heavy-bullets",
	});
}

export default Component;
