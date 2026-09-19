import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy6o8dbcn.css';
import '../../css/p/phhaw7b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dy6o8dbcn"/><path class="phhaw7b-q"/></g>`,
		"fallback": "iconamoon:delivery-fast-bold",
	});
}

export default Component;
