import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5hcmwljm.css';
import '../../css/d/d54yrkbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5hcmwljm"/><path class="d54yrkbbf"/></g>`,
		"fallback": "andrsrxn:door-out",
	});
}

export default Component;
