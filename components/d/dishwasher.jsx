import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zpglpo43s.css';
import '../../css/t/tsobq_nda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zpglpo43s"/><path class="tsobq_nda"/></g>`,
		"fallback": "iconoir:dishwasher",
	});
}

export default Component;
