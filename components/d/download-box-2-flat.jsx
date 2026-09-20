import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxcbjkkmz.css';
import '../../css/a/ay5bfi7_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxcbjkkmz"/><path class="ay5bfi7_w"/></g>`,
		"fallback": "streamline-plump-color:download-box-2-flat",
	});
}

export default Component;
