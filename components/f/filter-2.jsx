import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xprc55nds.css';
import '../../css/l/ll9qs5ibs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xprc55nds"/><path class="ll9qs5ibs"/></g>`,
		"fallback": "streamline-color:filter-2",
	});
}

export default Component;
