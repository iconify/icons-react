import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gdtdz7kbw.css';
import '../../css/d/dy1tihpmb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gdtdz7kbw"/><path clip-rule="evenodd" class="dy1tihpmb"/></g>`,
		"fallback": "streamline-color:hang-up-2-flat",
	});
}

export default Component;
