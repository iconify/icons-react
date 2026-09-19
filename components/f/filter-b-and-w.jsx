import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv91aob2m.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv91aob2m"/>`,
		"fallback": "zmdi:filter-b-and-w",
	});
}

export default Component;
