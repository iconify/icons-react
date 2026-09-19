import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iktcqv37p.css';
import '../../css/a/advxe_q3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iktcqv37p"/><path class="advxe_q3y"/></g>`,
		"fallback": "hugeicons:clock-04",
	});
}

export default Component;
