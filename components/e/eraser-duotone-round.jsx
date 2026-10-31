import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4fe231jf.css';
import '../../css/n/nh03-69zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q4fe231jf"/><path class="nh03-69zu"/></g>`,
		"fallback": "coolicons:eraser-duotone-round",
	});
}

export default Component;
