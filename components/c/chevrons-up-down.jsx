import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/l5nyp5b0s.css';
import '../../css/y/y0bloac6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="l5nyp5b0s"/><path class="y0bloac6d"/></g>`,
		"fallback": "matita:chevrons-up-down",
	});
}

export default Component;
