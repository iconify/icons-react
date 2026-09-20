import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4nek5byt.css';
import '../../css/t/tb16aibmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i4nek5byt"/><path class="tb16aibmo"/></g>`,
		"fallback": "streamline-ultimate-color:focus-m",
	});
}

export default Component;
