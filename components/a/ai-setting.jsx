import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ginckrb5s.css';
import '../../css/o/oy-on-bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ginckrb5s"/><path class="oy-on-bhi"/></g>`,
		"fallback": "hugeicons:ai-setting",
	});
}

export default Component;
