import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1gm55bxh.css';
import '../../css/h/hzmdeobek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y1gm55bxh"/><path class="hzmdeobek"/></g>`,
		"fallback": "streamline-plump-color:customer-support-3-flat",
	});
}

export default Component;
