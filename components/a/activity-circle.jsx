import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/k/kqwgzbb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g4zs08s-q"/><path class="kqwgzbb2x"/></g>`,
		"fallback": "hugeicons:activity-circle",
	});
}

export default Component;
