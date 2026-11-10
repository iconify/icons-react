import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgpy_ec8v.css';
import '../../css/y/y44khobgz.css';
import '../../css/j/jr6cypjkl.css';
import '../../css/c/c0kc3m79n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgpy_ec8v"/><path clip-rule="evenodd" class="y44khobgz"/><path class="jr6cypjkl"/><path class="c0kc3m79n"/></g>`,
		"fallback": "andrsrxn:app-window-cursor",
	});
}

export default Component;
