import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsd66bbuv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsd66bbuv"/>`,
		"fallback": "subway:duble-corner-arrow-5",
	});
}

export default Component;
