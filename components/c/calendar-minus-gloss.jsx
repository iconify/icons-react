import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gghi3zbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gghi3zbmm"/>`,
		"fallback": "withicons:calendar-minus-gloss",
	});
}

export default Component;
