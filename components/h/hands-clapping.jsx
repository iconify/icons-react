import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vivj0oign.css';
import '../../css/j/jw6z2q0oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vivj0oign"/><path class="jw6z2q0oo"/></g>`,
		"fallback": "hugeicons:hands-clapping",
	});
}

export default Component;
