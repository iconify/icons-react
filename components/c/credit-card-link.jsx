import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dup_ysbqy.css';
import '../../css/u/u244kxb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dup_ysbqy"/><path class="u244kxb7s"/></g>`,
		"fallback": "hugeicons:credit-card-link",
	});
}

export default Component;
