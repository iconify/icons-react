import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l2jjs2ffj.css';
import '../../css/p/p0vug3o8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="l2jjs2ffj"/><path class="p0vug3o8r"/></g>`,
		"fallback": "cryptocurrency-color:bq",
	});
}

export default Component;
