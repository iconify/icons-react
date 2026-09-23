import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a8qmqgb6k.css';
import '../../css/t/t0fqmp0yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a8qmqgb6k"/><path class="t0fqmp0yx"/></g>`,
		"fallback": "keyline-icons:hand-pointer-sparkles-sharp-fill",
	});
}

export default Component;
