import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq8chwoze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq8chwoze"/>`,
		"fallback": "game-icons:crystal-ball",
	});
}

export default Component;
