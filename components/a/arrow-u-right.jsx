import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4ahtzbau.css';
import '../../css/j/j8yn8zhqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c4ahtzbau"/><path class="j8yn8zhqq"/></g>`,
		"fallback": "andrsrxn:arrow-u-right",
	});
}

export default Component;
