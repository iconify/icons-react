import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kquf38e-o.css';
import '../../css/r/re9y4ex8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kquf38e-o"/><path class="re9y4ex8m"/></g>`,
		"fallback": "mynaui:gift",
	});
}

export default Component;
