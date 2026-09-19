import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j60z0ukrt.css';
import '../../css/c/cnnpvqbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j60z0ukrt"/><path class="cnnpvqbnr"/></g>`,
		"fallback": "hugeicons:id-card",
	});
}

export default Component;
