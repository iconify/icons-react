import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vax5azbnf.css';
import '../../css/v/vk9eh59hs.css';
import '../../css/f/f-p31mb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vax5azbnf"/><path class="vk9eh59hs"/><path class="f-p31mb4z"/></g>`,
		"fallback": "streamline-freehand-color:design-process-mouse-pen",
	});
}

export default Component;
