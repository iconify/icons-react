import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t6mow_csc.css';
import '../../css/a/an84x5z4z.css';
import '../../css/e/e46ou9nch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t6mow_csc"/><path class="an84x5z4z"/><path class="e46ou9nch"/></g>`,
		"fallback": "streamline-ultimate-color:electronics-led-light",
	});
}

export default Component;
