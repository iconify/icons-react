import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvv9gh6-y.css';
import '../../css/l/lk00aqbvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tvv9gh6-y"/><path clip-rule="evenodd" class="lk00aqbvc"/></g>`,
		"fallback": "streamline-plump-color:dollar-coin-flat",
	});
}

export default Component;
