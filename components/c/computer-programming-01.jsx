import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmetjnbqy.css';
import '../../css/t/tswyx9o1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hmetjnbqy"/><path class="tswyx9o1s"/></g>`,
		"fallback": "hugeicons:computer-programming-01",
	});
}

export default Component;
