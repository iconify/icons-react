import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g69ew-0ef.css';
import '../../css/y/y5y4rachd.css';
import '../../css/s/sbnczhbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g69ew-0ef"/><path class="y5y4rachd"/><circle transform="rotate(-90 18.32 4.84)" class="sbnczhbxk"/></g>`,
		"fallback": "andrsrxn:bell-notification",
	});
}

export default Component;
