import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjn698bso.css';
import '../../css/q/ql-0qix9e.css';
import '../../css/z/zyjy00vld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zjn698bso"/><circle class="ql-0qix9e"/><path class="zyjy00vld"/></g>`,
		"fallback": "andrsrxn:fahrenheit",
	});
}

export default Component;
