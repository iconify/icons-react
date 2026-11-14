import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w99w8acpr.css';
import '../../css/s/s-p6onbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w99w8acpr"/><path class="s-p6onbfk"/></g>`,
		"fallback": "hugeicons:ai-security-01",
	});
}

export default Component;
