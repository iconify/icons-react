import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/on1dt0bfe.css';
import '../../css/j/jvtjbnueh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="on1dt0bfe"/><path class="jvtjbnueh"/></g>`,
		"fallback": "hugeicons:3rd-bracket-square",
	});
}

export default Component;
