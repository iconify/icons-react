import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db1by81sm.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db1by81sm"/>`,
		"fallback": "zmdi:flip-to-back",
	});
}

export default Component;
