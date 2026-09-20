import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjhdf6blo.css';
import '../../css/f/fd8lqhaat.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fjhdf6blo"/><path class="fd8lqhaat"/></g>`,
		"fallback": "streamline-flex-color:call-center-support-service-flat",
	});
}

export default Component;
