import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fs5tw0-7h.css';
import '../../css/j/jvtjbnueh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fs5tw0-7h"/><path class="jvtjbnueh"/></g>`,
		"fallback": "hugeicons:2nd-bracket-square",
	});
}

export default Component;
