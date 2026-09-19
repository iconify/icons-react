import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wp2gcqb_l.css';
import '../../css/r/rivxn4bxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="wp2gcqb_l"/><path class="rivxn4bxh"/></g>`,
		"fallback": "cryptocurrency-color:add",
	});
}

export default Component;
