import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-evfve7o.css';
import '../../css/j/jdnhveiuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a-evfve7o"/><path class="jdnhveiuh"/></g>`,
		"fallback": "andrsrxn:currency-ils",
	});
}

export default Component;
