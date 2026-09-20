import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2jtk7bby.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2jtk7bby"/>`,
		"fallback": "teenyicons:calendar-minus-outline",
	});
}

export default Component;
