import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oaeymebhg.css';
import '../../css/x/xqnq_ab_u.css';
import '../../css/u/uevo4sbur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oaeymebhg"/><path clip-rule="evenodd" class="xqnq_ab_u"/><path class="uevo4sbur"/></g>`,
		"fallback": "streamline-color:database-remove-flat",
	});
}

export default Component;
