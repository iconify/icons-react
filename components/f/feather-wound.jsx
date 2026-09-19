import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe9t9acdd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe9t9acdd"/>`,
		"fallback": "game-icons:feather-wound",
	});
}

export default Component;
