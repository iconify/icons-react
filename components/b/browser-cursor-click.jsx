import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z58t3ls7w.css';
import '../../css/a/a5zjv6q8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z58t3ls7w"/><path class="a5zjv6q8b"/></g>`,
		"fallback": "andrsrxn:browser-cursor-click",
	});
}

export default Component;
