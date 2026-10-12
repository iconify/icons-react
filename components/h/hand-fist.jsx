import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqbr1gxvc.css';
import '../../css/z/zqlhvf7zu.css';
import '../../css/o/o6i7zhb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eqbr1gxvc"/><path class="zqlhvf7zu"/><path class="o6i7zhb8y"/></g>`,
		"fallback": "andrsrxn:hand-fist",
	});
}

export default Component;
