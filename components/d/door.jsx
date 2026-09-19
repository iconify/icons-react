import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d77b2ib9v.css';
import '../../css/g/gv6bzv2xb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d77b2ib9v"/><path class="gv6bzv2xb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:door",
	});
}

export default Component;
