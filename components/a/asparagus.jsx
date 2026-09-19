import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atsojk9me.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atsojk9me"/>`,
		"fallback": "game-icons:asparagus",
	});
}

export default Component;
