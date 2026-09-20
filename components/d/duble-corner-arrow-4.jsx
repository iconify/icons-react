import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugm2z76fb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugm2z76fb"/>`,
		"fallback": "subway:duble-corner-arrow-4",
	});
}

export default Component;
