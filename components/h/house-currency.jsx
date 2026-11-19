import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls8x7ynpf.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/m/m4t4e7hde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ls8x7ynpf"/><path class="gsvrl7yuk"/><path class="m4t4e7hde"/></g>`,
		"fallback": "andrsrxn:house-currency",
	});
}

export default Component;
