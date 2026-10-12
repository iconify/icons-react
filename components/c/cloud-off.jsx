import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9n-rccba.css';
import '../../css/j/jbvxl-b2r.css';
import '../../css/n/n5s-_wqwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9n-rccba"/><path class="jbvxl-b2r"/><path class="n5s-_wqwq"/></g>`,
		"fallback": "andrsrxn:cloud-off",
	});
}

export default Component;
