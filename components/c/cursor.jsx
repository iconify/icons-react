import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhi7aib7a.css';
import '../../css/z/ze6vhikbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhi7aib7a"/><path class="ze6vhikbm"/></g>`,
		"fallback": "andrsrxn:cursor",
	});
}

export default Component;
