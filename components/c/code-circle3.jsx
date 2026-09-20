import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/t3baomb4y.css';
import '../../css/m/muk_r6bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="t3baomb4y"/><path class="muk_r6bbu"/></g>`,
		"fallback": "reicon:code-circle3",
	});
}

export default Component;
