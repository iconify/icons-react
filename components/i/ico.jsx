import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4tanacyw.css';
import '../../css/h/hb8k6ubdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4tanacyw"/><path class="hb8k6ubdg"/></g>`,
		"fallback": "hugeicons:ico",
	});
}

export default Component;
