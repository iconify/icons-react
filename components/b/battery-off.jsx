import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn95ffbux.css';
import '../../css/i/ixvno675k.css';
import '../../css/c/cmsc4cczt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wn95ffbux"/><rect class="ixvno675k"/><path class="cmsc4cczt"/></g>`,
		"fallback": "andrsrxn:battery-off",
	});
}

export default Component;
