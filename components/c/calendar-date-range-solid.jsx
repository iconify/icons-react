import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuxx7n4ha.css';
import '../../css/x/xyaaz0bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuxx7n4ha"/><path clip-rule="evenodd" class="xyaaz0bcd"/>`,
		"fallback": "heroicons:calendar-date-range-solid",
	});
}

export default Component;
