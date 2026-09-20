import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1t2i0p0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1t2i0p0l"/>`,
		"fallback": "thesvg-color:autozone",
	});
}

export default Component;
