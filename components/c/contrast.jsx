import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhf1_tbip.css';
import '../../css/h/h27vhbcct.css';
import '../../css/f/f5qyoxbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nhf1_tbip"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><path class="f5qyoxbue"/></g>`,
		"fallback": "andrsrxn:contrast",
	});
}

export default Component;
