import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h4qdr5bzd.css';
import '../../css/u/ubewrjbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="h4qdr5bzd"/><path class="ubewrjbvg"/></g>`,
		"fallback": "proicons:eye",
	});
}

export default Component;
