import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvp439bnn.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvp439bnn"/>`,
		"fallback": "fa:calendar-check-o",
	});
}

export default Component;
