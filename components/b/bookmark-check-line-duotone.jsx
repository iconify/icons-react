import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p7sa9db3f.css';
import '../../css/q/qm4288i9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p7sa9db3f"/><path class="qm4288i9z"/></g>`,
		"fallback": "solar:bookmark-check-line-duotone",
	});
}

export default Component;
