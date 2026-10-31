import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkwpz-z8q.css';
import '../../css/q/qwej5ibhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkwpz-z8q"/><path class="qwej5ibhh"/></g>`,
		"fallback": "coolicons:headphones-duotone-round",
	});
}

export default Component;
