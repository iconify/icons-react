import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mx9hxde4b.css';
import '../../css/h/ha07w4bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mx9hxde4b"/><path class="ha07w4bcf"/></g>`,
		"fallback": "coolicons:chat-circle-dots-duotone-round",
	});
}

export default Component;
