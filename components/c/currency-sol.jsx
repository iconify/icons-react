import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys2o03bfl.css';
import '../../css/i/i3yhlrbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ys2o03bfl"/><path class="i3yhlrbdw"/></g>`,
		"fallback": "andrsrxn:currency-sol",
	});
}

export default Component;
