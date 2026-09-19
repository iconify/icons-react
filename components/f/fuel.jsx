import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwcfgi39q.css';
import '../../css/w/wmh8izbkm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lwcfgi39q"/><path class="wmh8izbkm"/></g>`,
		"fallback": "cryptocurrency-color:fuel",
	});
}

export default Component;
