import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cblxxv4ss.css';
import '../../css/b/bxh9_l-xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cblxxv4ss"/><path class="bxh9_l-xc"/></g>`,
		"fallback": "tdesign:institution-checked",
	});
}

export default Component;
