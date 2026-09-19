import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmetjnbqy.css';
import '../../css/y/y_yan5bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hmetjnbqy"/><path class="y_yan5bci"/></g>`,
		"fallback": "hugeicons:computer-chart-down",
	});
}

export default Component;
