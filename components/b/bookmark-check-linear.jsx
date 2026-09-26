import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p7sa9db3f.css';
import '../../css/q/qiifq5b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p7sa9db3f"/><path class="qiifq5b8x"/></g>`,
		"fallback": "solar:bookmark-check-linear",
	});
}

export default Component;
