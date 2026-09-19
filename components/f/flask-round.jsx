import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m3w2f4d-q.css';
import '../../css/x/xb8qf9boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m3w2f4d-q"/><path class="xb8qf9boi"/></g>`,
		"fallback": "hugeicons:flask-round",
	});
}

export default Component;
