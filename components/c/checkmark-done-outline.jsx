import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdt5yo5_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdt5yo5_e"/>`,
		"fallback": "famicons:checkmark-done-outline",
	});
}

export default Component;
