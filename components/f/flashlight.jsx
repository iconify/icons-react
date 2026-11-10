import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm5_1acin.css';
import '../../css/o/om-9qdbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jm5_1acin"/><path class="om-9qdbcl"/></g>`,
		"fallback": "andrsrxn:flashlight",
	});
}

export default Component;
