import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uvet22g_h.css';
import '../../css/r/r1o48umgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uvet22g_h"/><path class="r1o48umgg"/></g>`,
		"fallback": "streamline-ultimate:fast-food-french-fries",
	});
}

export default Component;
