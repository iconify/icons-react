import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ptjn9dspd.css';
import '../../css/s/snfwzgyfx.css';
import '../../css/l/lh9k_h7vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ptjn9dspd"/><path clip-rule="evenodd" class="snfwzgyfx"/><path class="lh9k_h7vv"/></g>`,
		"fallback": "nrk:alarm-clock",
	});
}

export default Component;
