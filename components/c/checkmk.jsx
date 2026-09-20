import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmz9v2xcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmz9v2xcg"/>`,
		"fallback": "selfhst:checkmk",
	});
}

export default Component;
