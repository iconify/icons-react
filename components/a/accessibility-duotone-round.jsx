import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0lv7f-we.css';
import '../../css/t/t3z0vonch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0lv7f-we"/><path class="t3z0vonch"/></g>`,
		"fallback": "coolicons:accessibility-duotone-round",
	});
}

export default Component;
