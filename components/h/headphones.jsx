import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k6uj5jwfh.css';
import '../../css/q/q17hjni5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k6uj5jwfh"/><path class="q17hjni5z"/></g>`,
		"fallback": "hugeicons:headphones",
	});
}

export default Component;
