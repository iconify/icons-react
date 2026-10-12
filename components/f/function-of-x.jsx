import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ojg14p0pa.css';
import '../../css/k/kgkhxhb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ojg14p0pa"/><path class="kgkhxhb4y"/></g>`,
		"fallback": "andrsrxn:function-of-x",
	});
}

export default Component;
