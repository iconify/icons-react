import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/ate314u0h.css';
import '../../css/o/oc5n1bb4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="ate314u0h"/><path class="oc5n1bb4u"/></g>`,
		"fallback": "garden:check-box-stroke-16",
	});
}

export default Component;
