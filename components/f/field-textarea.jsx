import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhub33b0o.css';
import '../../css/j/jhp6mkb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vhub33b0o"/><path class="jhp6mkb8z"/></g>`,
		"fallback": "andrsrxn:field-textarea",
	});
}

export default Component;
