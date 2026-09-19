import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjlogeiow.css';
import '../../css/e/e78cadrgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sjlogeiow"/><path class="e78cadrgq"/></g>`,
		"fallback": "hugeicons:house-03",
	});
}

export default Component;
