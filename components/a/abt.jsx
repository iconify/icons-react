import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r5nyd_z6p.css';
import '../../css/l/lv86cgbir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="r5nyd_z6p"/><path class="lv86cgbir"/></g>`,
		"fallback": "cryptocurrency-color:abt",
	});
}

export default Component;
