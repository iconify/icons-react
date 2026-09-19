import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joamw7nrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joamw7nrs"/>`,
		"fallback": "game-icons:falling",
	});
}

export default Component;
