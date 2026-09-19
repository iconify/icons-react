import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xr61jac5c.css';
import '../../css/n/nggtjyblc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="xr61jac5c"/><path class="nggtjyblc"/></g>`,
		"fallback": "cryptocurrency-color:dta",
	});
}

export default Component;
