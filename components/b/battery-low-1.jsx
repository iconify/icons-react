import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyei83bdy.css';
import '../../css/t/thjoxtgjs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyei83bdy"/><path class="thjoxtgjs"/></g>`,
		"fallback": "streamline-color:battery-low-1",
	});
}

export default Component;
