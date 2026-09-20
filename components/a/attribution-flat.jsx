import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lku1k6bcs.css';
import '../../css/h/h19of-bzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lku1k6bcs"/><path clip-rule="evenodd" class="h19of-bzr"/></g>`,
		"fallback": "streamline-plump-color:attribution-flat",
	});
}

export default Component;
