import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smgkjcctl.css';
import '../../css/p/p7ral5b5o.css';
import '../../css/o/op9t8rroq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="smgkjcctl"/><path class="p7ral5b5o"/><path class="op9t8rroq"/></g>`,
		"fallback": "streamline-cyber-color:camera-lens-3",
	});
}

export default Component;
