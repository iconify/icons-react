import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cf3mtvj3r.css';
import '../../css/e/estf8zb3r.css';
import '../../css/o/oj-9kkb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cf3mtvj3r"/><path class="estf8zb3r"/><path class="oj-9kkb7a"/></g>`,
		"fallback": "andrsrxn:file-analytics",
	});
}

export default Component;
