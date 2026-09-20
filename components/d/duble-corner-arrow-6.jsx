import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0_4ajs8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0_4ajs8q"/>`,
		"fallback": "subway:duble-corner-arrow-6",
	});
}

export default Component;
