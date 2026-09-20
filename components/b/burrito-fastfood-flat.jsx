import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l91nai2hu.css';
import '../../css/r/rjvz35b7b.css';
import '../../css/p/pmsq_eg4h.css';
import '../../css/h/hrcz5pbil.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l91nai2hu"/><path clip-rule="evenodd" class="rjvz35b7b"/><path clip-rule="evenodd" class="pmsq_eg4h"/><path clip-rule="evenodd" class="hrcz5pbil"/></g>`,
		"fallback": "streamline-color:burrito-fastfood-flat",
	});
}

export default Component;
