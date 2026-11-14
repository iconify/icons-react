import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uuber1bzf.css';
import '../../css/v/vjp_-jb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="uuber1bzf"/><path class="vjp_-jb6p"/></g>`,
		"fallback": "evicons:bidirectional-charging",
	});
}

export default Component;
