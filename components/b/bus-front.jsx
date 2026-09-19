import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/whdet7moo.css';
import '../../css/x/x216v_kvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="whdet7moo"/><path class="x216v_kvo"/></g>`,
		"fallback": "hugeicons:bus-front",
	});
}

export default Component;
