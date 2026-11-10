import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-32871_k.css';
import '../../css/y/ymbrxwopn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-32871_k"/><path class="ymbrxwopn"/></g>`,
		"fallback": "andrsrxn:annotations",
	});
}

export default Component;
