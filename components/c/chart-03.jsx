import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5t5q7b6n.css';
import '../../css/d/dqolbqyyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v5t5q7b6n"/><path class="dqolbqyyh"/></g>`,
		"fallback": "hugeicons:chart-03",
	});
}

export default Component;
