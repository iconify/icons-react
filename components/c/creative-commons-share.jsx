import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycqd8f9yh.css';
import '../../css/x/x3__3mamu.css';
import '../../css/n/nkr7vc-2t.css';
import '../../css/s/sgxujsb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ycqd8f9yh"/><path class="x3__3mamu"/><path class="nkr7vc-2t"/><path class="sgxujsb_j"/></g>`,
		"fallback": "andrsrxn:creative-commons-share",
	});
}

export default Component;
