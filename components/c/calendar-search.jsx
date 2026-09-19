import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g3_itsblt.css';
import '../../css/t/tdttt-ead.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g3_itsblt"/><path class="tdttt-ead"/></g>`,
		"fallback": "hugeicons:calendar-search",
	});
}

export default Component;
