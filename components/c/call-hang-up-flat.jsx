import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hege8bcxx.css';
import '../../css/m/m-y3mcclc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hege8bcxx"/><path clip-rule="evenodd" class="m-y3mcclc"/></g>`,
		"fallback": "streamline-plump-color:call-hang-up-flat",
	});
}

export default Component;
