import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mz5q6iwun.css';
import '../../css/e/eyrzruisf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mz5q6iwun"/><path class="eyrzruisf"/></g>`,
		"fallback": "mynaui:daze-ghost",
	});
}

export default Component;
