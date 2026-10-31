import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5_7bnb3d.css';
import '../../css/h/hxmqeacjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5_7bnb3d"/><path class="hxmqeacjo"/></g>`,
		"fallback": "coolicons:crown-duotone-round",
	});
}

export default Component;
