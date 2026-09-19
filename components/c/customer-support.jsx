import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/obblj4bwn.css';
import '../../css/d/d-9yqyjnd.css';
import '../../css/o/ogj5jkb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="obblj4bwn"/><path class="d-9yqyjnd"/><path class="ogj5jkb9v"/></g>`,
		"fallback": "hugeicons:customer-support",
	});
}

export default Component;
