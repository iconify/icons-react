import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/onu9pkb0s.css';
import '../../css/s/sfy-eccwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="onu9pkb0s"/><path class="sfy-eccwe"/></g>`,
		"fallback": "hugeicons:dress-04",
	});
}

export default Component;
