import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5adnvitg.css';
import '../../css/q/qvkknccpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5adnvitg"/><path class="qvkknccpk"/></g>`,
		"fallback": "andrsrxn:browser-cursor",
	});
}

export default Component;
