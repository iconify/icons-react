import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5y5gxn0v.css';
import '../../css/g/g2bhzsius.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v5y5gxn0v"/><path class="g2bhzsius"/></g>`,
		"fallback": "hugeicons:activity-01",
	});
}

export default Component;
