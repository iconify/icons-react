import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhm0ndz3m.css';
import '../../css/v/vw4ng7gqm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhm0ndz3m"/><path class="vw4ng7gqm"/>`,
		"fallback": "cil:chevron-double-down",
	});
}

export default Component;
