import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsxeh2bfn.css';
import '../../css/u/uxyzhxvwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="qsxeh2bfn"/><path class="uxyzhxvwz"/></g>`,
		"fallback": "proicons:button",
	});
}

export default Component;
