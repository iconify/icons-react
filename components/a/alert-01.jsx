import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ttl4o7hvh.css';
import '../../css/x/xoisqubme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ttl4o7hvh"/><path class="xoisqubme"/></g>`,
		"fallback": "hugeicons:alert-01",
	});
}

export default Component;
