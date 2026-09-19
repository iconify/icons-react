import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/alatx4b2e.css';
import '../../css/w/wtvp13b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="alatx4b2e"/><path class="wtvp13b2h"/></g>`,
		"fallback": "hugeicons:calendar-fold",
	});
}

export default Component;
