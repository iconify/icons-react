import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fu56vibry.css';
import '../../css/m/mw-39gg1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fu56vibry"/><path class="mw-39gg1z"/></g>`,
		"fallback": "coolicons:bandage-duocolor-round",
	});
}

export default Component;
