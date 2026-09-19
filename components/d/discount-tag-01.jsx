import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ewh2-wbnp.css';
import '../../css/u/uydlmxbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ewh2-wbnp"/><path class="uydlmxbqf"/></g>`,
		"fallback": "hugeicons:discount-tag-01",
	});
}

export default Component;
