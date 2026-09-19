import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvtzd3b0t.css';
import '../../css/m/mprowr57e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zvtzd3b0t"/><path class="mprowr57e"/>`,
		"fallback": "famicons:calendar-clear-outline",
	});
}

export default Component;
