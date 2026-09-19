import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ajhnovb7j.css';
import '../../css/q/qnmez7qfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ajhnovb7j"/><path class="qnmez7qfe"/></g>`,
		"fallback": "hugeicons:hop",
	});
}

export default Component;
