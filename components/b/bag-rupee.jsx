import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yb_mnyegm.css';
import '../../css/h/h672rr9-k.css';
import '../../css/w/wtugr3bve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yb_mnyegm"/><path class="h672rr9-k"/><path class="wtugr3bve"/></g>`,
		"fallback": "streamline-color:bag-rupee",
	});
}

export default Component;
