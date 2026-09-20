import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh5niglok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh5niglok"/>`,
		"fallback": "selfhst:dumbdo-dark",
	});
}

export default Component;
