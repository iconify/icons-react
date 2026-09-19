import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxgs2dblr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxgs2dblr"/>`,
		"fallback": "game-icons:computing",
	});
}

export default Component;
