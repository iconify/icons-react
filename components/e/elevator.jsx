import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yup2mrbmc.css';
import '../../css/b/bx6r8nbqq.css';
import '../../css/n/npykx5b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yup2mrbmc"/><path class="bx6r8nbqq"/><path class="npykx5b5y"/></g>`,
		"fallback": "andrsrxn:elevator",
	});
}

export default Component;
