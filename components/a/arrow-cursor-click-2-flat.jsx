import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idjb8uvdc.css';
import '../../css/m/m8k6ofbaz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="idjb8uvdc"/><path clip-rule="evenodd" class="m8k6ofbaz"/></g>`,
		"fallback": "streamline-flex-color:arrow-cursor-click-2-flat",
	});
}

export default Component;
