import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdy9f-bjt.css';
import '../../css/o/oh0vtb84n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cdy9f-bjt"/><path class="oh0vtb84n"/></g>`,
		"fallback": "iconoir:bread-slice",
	});
}

export default Component;
