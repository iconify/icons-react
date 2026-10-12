import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mwzzfe4ju.css';
import '../../css/d/dcm0qeb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mwzzfe4ju"/><path class="dcm0qeb0c"/></g>`,
		"fallback": "andrsrxn:arrow-u-left",
	});
}

export default Component;
