import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay3y2jkpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay3y2jkpb"/>`,
		"fallback": "game-icons:eyepatch",
	});
}

export default Component;
