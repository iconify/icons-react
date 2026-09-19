import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dy3uwwbtb.css';
import '../../css/h/h-_3jubfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dy3uwwbtb"/><path class="h-_3jubfb"/></g>`,
		"fallback": "hugeicons:discord",
	});
}

export default Component;
