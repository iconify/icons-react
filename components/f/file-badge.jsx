import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bybr2q82h.css';
import '../../css/t/t34te5bfi.css';
import '../../css/g/gw45uub7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bybr2q82h"/><path class="t34te5bfi"/><path class="gw45uub7x"/></g>`,
		"fallback": "hugeicons:file-badge",
	});
}

export default Component;
