import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c8lxk58_q.css';
import '../../css/c/com88-bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c8lxk58_q"/><path class="com88-bje"/></g>`,
		"fallback": "hugeicons:cursor-progress-01",
	});
}

export default Component;
