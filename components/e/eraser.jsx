import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyx1jxu_r.css';
import '../../css/z/z7bqlfbqb.css';
import '../../css/a/a7fj8acel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oyx1jxu_r"/><path class="z7bqlfbqb"/><path class="a7fj8acel"/></g>`,
		"fallback": "andrsrxn:eraser",
	});
}

export default Component;
