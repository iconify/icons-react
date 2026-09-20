import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg9of2bnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg9of2bnh"/>`,
		"fallback": "selfhst:elysian",
	});
}

export default Component;
