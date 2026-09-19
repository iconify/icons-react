import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_q_79-7w.css';
import '../../css/g/g5i935bzv.css';
import '../../css/g/g8h9qw7uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r_q_79-7w"/><path class="g5i935bzv"/><path class="g8h9qw7uk"/></g>`,
		"fallback": "hugeicons:advertisement",
	});
}

export default Component;
