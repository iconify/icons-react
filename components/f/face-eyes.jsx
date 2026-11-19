import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8trjubak.css';
import '../../css/w/wmzn4t3dy.css';
import '../../css/x/xdns4ecdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y8trjubak"/><path class="wmzn4t3dy"/><path class="xdns4ecdn"/></g>`,
		"fallback": "andrsrxn:face-eyes",
	});
}

export default Component;
