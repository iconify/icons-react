import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qyr2oe9wv.css';
import '../../css/d/dddoctblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qyr2oe9wv"/><path class="dddoctblf"/></g>`,
		"fallback": "withicons-retro:grip-horizontal",
	});
}

export default Component;
