import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0f-q8b2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0f-q8b2g"/>`,
		"fallback": "selfhst:crafty-controller-dark",
	});
}

export default Component;
