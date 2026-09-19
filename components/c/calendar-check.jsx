import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmba4taom.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmba4taom"/>`,
		"fallback": "fa6-regular:calendar-check",
	});
}

export default Component;
