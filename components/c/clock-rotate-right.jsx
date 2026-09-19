import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/um27ogbzd.css';
import '../../css/o/ol6ywj3wc.css';
import '../../css/k/k0jum4blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="um27ogbzd"/><path class="ol6ywj3wc"/><path class="k0jum4blu"/></g>`,
		"fallback": "iconoir:clock-rotate-right",
	});
}

export default Component;
