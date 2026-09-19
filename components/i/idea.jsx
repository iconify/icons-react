import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jzbcrvb0w.css';
import '../../css/a/a2e5x6bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jzbcrvb0w"/><path class="a2e5x6bcr"/></g>`,
		"fallback": "hugeicons:idea",
	});
}

export default Component;
