import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9xpqeygh.css';
import '../../css/h/hf64jeb9j.css';
import '../../css/q/q8qp76b7e.css';
import '../../css/k/kwex89b7e.css';
import '../../css/n/ntnjhxbnv.css';
import '../../css/z/z2pgdablv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9xpqeygh"/><circle class="hf64jeb9j"/><path class="q8qp76b7e"/><path class="kwex89b7e"/><circle class="ntnjhxbnv"/><path class="z2pgdablv"/></g>`,
		"fallback": "andrsrxn:cake",
	});
}

export default Component;
