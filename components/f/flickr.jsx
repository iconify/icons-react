import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vti7h_4la.css';
import '../../css/z/znvm40bms.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="vti7h_4la"/><circle class="znvm40bms"/></g>`,
		"fallback": "jam:flickr",
	});
}

export default Component;
