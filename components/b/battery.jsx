import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_7u1dbxz.css';
import '../../css/a/a9s19z70m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e_7u1dbxz"/><path class="a9s19z70m"/></g>`,
		"fallback": "majesticons:battery",
	});
}

export default Component;
