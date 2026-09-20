import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9wg6oj_y.css';
import '../../css/c/ceigb7b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect transform="rotate(-90 12 17.333)" class="g9wg6oj_y"/><rect transform="rotate(-90 12 6.667)" class="ceigb7b-j"/></g>`,
		"fallback": "reicon:align-3-horizontal",
	});
}

export default Component;
