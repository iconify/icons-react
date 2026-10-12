import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/c/cn-xrxbxr.css';
import '../../css/h/h27vhbcct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="g2bmsqbnm"/><path class="cn-xrxbxr"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/></g>`,
		"fallback": "andrsrxn:hashtag-circle",
	});
}

export default Component;
