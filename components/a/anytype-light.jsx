import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1r5bbcod.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1r5bbcod"/>`,
		"fallback": "selfhst:anytype-light",
	});
}

export default Component;
