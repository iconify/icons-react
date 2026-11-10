import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cf3mtvj3r.css';
import '../../css/e/estf8zb3r.css';
import '../../css/s/s1i5aybra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cf3mtvj3r"/><path class="estf8zb3r"/><path class="s1i5aybra"/></g>`,
		"fallback": "andrsrxn:file-diff",
	});
}

export default Component;
