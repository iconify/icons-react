import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-gr0fbsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-gr0fbsd"/>`,
		"fallback": "selfhst:filerun",
	});
}

export default Component;
