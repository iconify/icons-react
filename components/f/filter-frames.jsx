import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_tr_7bxk.css';
import '../../css/q/qks_3bc-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_tr_7bxk"/><path class="qks_3bc-r"/>`,
		"fallback": "cil:filter-frames",
	});
}

export default Component;
