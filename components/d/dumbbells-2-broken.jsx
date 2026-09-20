import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lipr7d2ci.css';
import '../../css/w/wj0xsxwpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lipr7d2ci"/><path class="wj0xsxwpq"/></g>`,
		"fallback": "solar:dumbbells-2-broken",
	});
}

export default Component;
