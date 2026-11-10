import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cf3mtvj3r.css';
import '../../css/g/g0o0c02xd.css';
import '../../css/f/fd_6nccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cf3mtvj3r"/><path class="g0o0c02xd"/><path class="fd_6nccqq"/></g>`,
		"fallback": "andrsrxn:file-move",
	});
}

export default Component;
