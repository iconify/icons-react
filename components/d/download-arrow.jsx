import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/y3vr5wbqc.css';
import '../../css/p/p-t1syddl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="y3vr5wbqc"/><path class="p-t1syddl"/></g>`,
		"fallback": "streamline-flex:download-arrow",
	});
}

export default Component;
