import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq_n93buh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq_n93buh"/>`,
		"fallback": "selfhst:blinko-light",
	});
}

export default Component;
