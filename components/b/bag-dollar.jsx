import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yb_mnyegm.css';
import '../../css/a/ab00bfbvi.css';
import '../../css/x/x52_apidv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yb_mnyegm"/><path class="ab00bfbvi"/><path class="x52_apidv"/></g>`,
		"fallback": "streamline-color:bag-dollar",
	});
}

export default Component;
