import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p6vnw5bzz.css';
import '../../css/o/ojfk5ud9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p6vnw5bzz"/><path class="ojfk5ud9u"/></g>`,
		"fallback": "keyline-icons:calendar-check-sharp-duotone",
	});
}

export default Component;
