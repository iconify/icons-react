import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/itl6pib4d.css';
import '../../css/s/sd52bo_om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="itl6pib4d"/><path class="sd52bo_om"/></g>`,
		"fallback": "hugeicons:checkmark-badge-03",
	});
}

export default Component;
