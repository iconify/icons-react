import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9yy3vt5w.css';
import '../../css/m/mq5a4_bbb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9yy3vt5w"/><path clip-rule="evenodd" class="mq5a4_bbb"/></g>`,
		"fallback": "streamline-flex-color:cloud-warning-flat",
	});
}

export default Component;
