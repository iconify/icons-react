import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a6s7kwbyx.css';
import '../../css/k/kss69uqkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a6s7kwbyx"/><path class="kss69uqkx"/></g>`,
		"fallback": "hugeicons:calendar-cog",
	});
}

export default Component;
