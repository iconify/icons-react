import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tgs4amb2a.css';
import '../../css/y/yhvmc7bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tgs4amb2a"/><path class="yhvmc7bsg"/></g>`,
		"fallback": "matita:arrow-up-right",
	});
}

export default Component;
