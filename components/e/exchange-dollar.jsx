import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwj6kkx9i.css';
import '../../css/k/khfhn220m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kwj6kkx9i"/><path class="khfhn220m"/></g>`,
		"fallback": "hugeicons:exchange-dollar",
	});
}

export default Component;
