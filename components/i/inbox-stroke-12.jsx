import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y7ari8bbq.css';
import '../../css/e/esmfmnw_q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="y7ari8bbq"/><path class="esmfmnw_q"/></g>`,
		"fallback": "garden:inbox-stroke-12",
	});
}

export default Component;
