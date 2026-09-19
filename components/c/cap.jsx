import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v3sjnl6kg.css';
import '../../css/e/eh-eqfbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v3sjnl6kg"/><path class="eh-eqfbvc"/></g>`,
		"fallback": "hugeicons:cap",
	});
}

export default Component;
