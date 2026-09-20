import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wyw19bcuf.css';
import '../../css/x/x_zapubhu.css';
import '../../css/c/cgwc_t6sh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="wyw19bcuf"/><path class="x_zapubhu"/><path class="cgwc_t6sh"/></g>`,
		"fallback": "streamline-plump:customer-support-7",
	});
}

export default Component;
