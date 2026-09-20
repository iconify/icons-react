import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-4c9b3c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to-4c9b3c"/>`,
		"fallback": "pinhead:calendar-with-wheelie-bin",
	});
}

export default Component;
