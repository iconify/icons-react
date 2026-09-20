import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntug3ea9g.css';
import '../../css/y/y6g7tfbrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntug3ea9g"/><path class="y6g7tfbrh"/>`,
		"fallback": "selfhst:frappe-erpnext",
	});
}

export default Component;
