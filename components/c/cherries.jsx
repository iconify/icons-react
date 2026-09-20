import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exe76dt8a.css';
import '../../css/v/vu8vbdbsk.css';
import '../../css/k/kl23368kz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exe76dt8a"/><path class="vu8vbdbsk"/><path class="kl23368kz"/></g>`,
		"fallback": "streamline-color:cherries",
	});
}

export default Component;
