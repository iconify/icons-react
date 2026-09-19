import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d1rfgxqkx.css';
import '../../css/t/t9hbbkbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d1rfgxqkx"/><path class="t9hbbkbzb"/></g>`,
		"fallback": "hugeicons:gift-card",
	});
}

export default Component;
