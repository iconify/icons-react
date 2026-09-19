import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p8f7ohimt.css';
import '../../css/c/cp0wlecaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p8f7ohimt"/><path class="cp0wlecaz"/></g>`,
		"fallback": "hugeicons:ai-wiper",
	});
}

export default Component;
