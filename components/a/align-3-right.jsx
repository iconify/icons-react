import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r4s1crbcx.css';
import '../../css/h/h8ir93b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect transform="rotate(90 12 6.667)" class="r4s1crbcx"/><rect transform="rotate(90 16 17.333)" class="h8ir93b3t"/></g>`,
		"fallback": "reicon:align-3-right",
	});
}

export default Component;
