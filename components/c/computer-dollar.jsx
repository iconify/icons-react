import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7ppz5bmi.css';
import '../../css/q/qzjy3eb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e7ppz5bmi"/><path class="qzjy3eb0p"/></g>`,
		"fallback": "hugeicons:computer-dollar",
	});
}

export default Component;
