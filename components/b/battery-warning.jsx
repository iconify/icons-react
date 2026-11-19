import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os24rd1in.css';
import '../../css/i/ibv299b8u.css';
import '../../css/f/ftn35xbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="os24rd1in"/><path class="ibv299b8u"/><path class="ftn35xbvw"/></g>`,
		"fallback": "andrsrxn:battery-warning",
	});
}

export default Component;
