import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/va-3p8pyw.css';
import '../../css/h/hajvu_ngz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="va-3p8pyw"/><path class="hajvu_ngz"/></g>`,
		"fallback": "solar:4k-line-duotone",
	});
}

export default Component;
