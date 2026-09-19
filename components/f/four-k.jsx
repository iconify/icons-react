import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hx24udb8u.css';
import '../../css/q/qk5l60_1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hx24udb8u"/><path class="qk5l60_1o"/></g>`,
		"fallback": "hugeicons:four-k",
	});
}

export default Component;
