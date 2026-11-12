import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8zjdfbvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8zjdfbvx"/>`,
		"fallback": "selfhst:freeresend-light",
	});
}

export default Component;
