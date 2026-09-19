import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ki4th0bqt.css';
import '../../css/t/tt23r0dim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ki4th0bqt"/><path class="tt23r0dim"/></g>`,
		"fallback": "hugeicons:bookmark-03",
	});
}

export default Component;
