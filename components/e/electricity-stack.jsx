import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rfw4ffcyl.css';
import '../../css/w/w5jmllbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rfw4ffcyl"/><path class="w5jmllbgs"/></g>`,
		"fallback": "hugeicons:electricity-stack",
	});
}

export default Component;
