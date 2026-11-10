import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uny6rsjdx.css';
import '../../css/x/x3__3mamu.css';
import '../../css/p/p_0ntubxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uny6rsjdx"/><path class="x3__3mamu"/><path class="p_0ntubxf"/></g>`,
		"fallback": "andrsrxn:creative-commons",
	});
}

export default Component;
