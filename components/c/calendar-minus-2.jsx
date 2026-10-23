import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khe5ybbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khe5ybbbj"/>`,
		"fallback": "vadivam:calendar-minus-2",
	});
}

export default Component;
