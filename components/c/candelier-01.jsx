import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h89zv-nyh.css';
import '../../css/p/py_4ibbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h89zv-nyh"/><path class="py_4ibbbt"/></g>`,
		"fallback": "hugeicons:candelier-01",
	});
}

export default Component;
