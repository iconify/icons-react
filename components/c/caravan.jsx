import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjewimb5j.css';
import '../../css/g/gxekegbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tjewimb5j"/><path class="gxekegbyh"/></g>`,
		"fallback": "mynaui:caravan",
	});
}

export default Component;
