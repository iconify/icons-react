import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tojdi1wps.css';
import '../../css/i/i4w1lbc8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tojdi1wps"/><path class="i4w1lbc8i"/></g>`,
		"fallback": "hugeicons:arrow-turn-forward",
	});
}

export default Component;
