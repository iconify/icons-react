import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7oz91b2j.css';
import '../../css/y/y5kq8lbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e7oz91b2j"/><path class="y5kq8lbrz"/></g>`,
		"fallback": "coolicons:book-sparkle-duotone-round",
	});
}

export default Component;
