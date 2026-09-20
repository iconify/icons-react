import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/st7pjzbdn.css';
import '../../css/a/aq-s7qbbu.css';
import '../../css/e/eknzlevqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="st7pjzbdn"/><path clip-rule="evenodd" class="aq-s7qbbu"/><path class="eknzlevqo"/></g>`,
		"fallback": "streamline-flex-color:camera-tripod-flat",
	});
}

export default Component;
