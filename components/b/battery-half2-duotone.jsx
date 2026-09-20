import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tah7gybex.css';
import '../../css/x/xs97l4bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tah7gybex"/><path class="xs97l4bgr"/></g>`,
		"fallback": "reicon:battery-half2-duotone",
	});
}

export default Component;
