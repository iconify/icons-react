import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-_s6p0pq.css';
import '../../css/u/utbxovsvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k-_s6p0pq"/><path class="utbxovsvh"/></g>`,
		"fallback": "hugeicons:give-pill",
	});
}

export default Component;
