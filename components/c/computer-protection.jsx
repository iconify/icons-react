import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qo5e1pbwe.css';
import '../../css/w/w6h27un-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qo5e1pbwe"/><path class="w6h27un-e"/></g>`,
		"fallback": "hugeicons:computer-protection",
	});
}

export default Component;
