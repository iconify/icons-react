import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nijop-bue.css';
import '../../css/u/u4u9d1-mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nijop-bue"/><path class="u4u9d1-mz"/></g>`,
		"fallback": "solar:chevrons-right-left-linear",
	});
}

export default Component;
