import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m5x-zobik.css';
import '../../css/t/t1z-7sbei.css';
import '../../css/i/imqulxbun.css';
import '../../css/l/lnhar4h5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m5x-zobik"/><path class="t1z-7sbei"/><path class="imqulxbun"/><path class="lnhar4h5b"/></g>`,
		"fallback": "andrsrxn:currency-circle-in",
	});
}

export default Component;
