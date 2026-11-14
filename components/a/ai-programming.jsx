import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z3mtjzizr.css';
import '../../css/o/o6t718bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z3mtjzizr"/><path class="o6t718bdk"/></g>`,
		"fallback": "hugeicons:ai-programming",
	});
}

export default Component;
