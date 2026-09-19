import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ozipg7bdf.css';
import '../../css/m/m8qo923lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ozipg7bdf"/><path class="m8qo923lb"/></g>`,
		"fallback": "iconoir:arrow-down-tag",
	});
}

export default Component;
