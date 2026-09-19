import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs9_k7rdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs9_k7rdk"/>`,
		"fallback": "iconamoon:calendar-add-thin",
	});
}

export default Component;
