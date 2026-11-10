import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nznz3mbbq.css';
import '../../css/c/c2bmh0bkk.css';
import '../../css/i/ig7og-50b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nznz3mbbq"/><path clip-rule="evenodd" class="c2bmh0bkk"/><path class="ig7og-50b"/></g>`,
		"fallback": "andrsrxn:explicit-filled",
	});
}

export default Component;
