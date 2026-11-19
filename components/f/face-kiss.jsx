import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca2dzib3m.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/y/y6oio0bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ca2dzib3m"/><circle class="bt9-2rbpz"/><path class="y6oio0bkc"/></g>`,
		"fallback": "andrsrxn:face-kiss",
	});
}

export default Component;
