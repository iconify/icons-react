import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oy5cgcb0w.css';
import '../../css/w/w0qkllu2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oy5cgcb0w"/><path class="w0qkllu2h"/></g>`,
		"fallback": "solar:diagram-down-linear",
	});
}

export default Component;
