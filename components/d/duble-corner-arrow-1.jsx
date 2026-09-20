import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea-ko3b1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea-ko3b1b"/>`,
		"fallback": "subway:duble-corner-arrow-1",
	});
}

export default Component;
