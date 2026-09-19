import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v8ahdhauw.css';
import '../../css/h/hxk7pxb7i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="v8ahdhauw"/><path class="hxk7pxb7i"/></g>`,
		"fallback": "cryptocurrency-color:eur",
	});
}

export default Component;
