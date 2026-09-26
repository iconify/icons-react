import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p7sa9db3f.css';
import '../../css/c/ch0cpabpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p7sa9db3f"/><path class="ch0cpabpt"/></g>`,
		"fallback": "solar:bookmark-x-linear",
	});
}

export default Component;
