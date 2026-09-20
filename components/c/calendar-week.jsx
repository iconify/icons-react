import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxvt__b5e.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxvt__b5e"/>`,
		"fallback": "system-uicons:calendar-week",
	});
}

export default Component;
