import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw3ve7bqp.css';
import '../../css/t/t-kfbfbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gw3ve7bqp"/><path class="t-kfbfbgq"/></g>`,
		"fallback": "hugeicons:bookmark-03",
	});
}

export default Component;
