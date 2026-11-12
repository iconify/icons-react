import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/chd_4ebma.css';
import '../../css/a/affcv8b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="chd_4ebma"/><path class="affcv8b7i"/></g>`,
		"fallback": "wordpress:copy",
	});
}

export default Component;
