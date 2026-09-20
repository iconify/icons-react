import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lzsqtmb4w.css';
import '../../css/y/yd48mxb5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="lzsqtmb4w"/><path class="yd48mxb5z"/></g>`,
		"fallback": "streamline-plump:archive-box",
	});
}

export default Component;
