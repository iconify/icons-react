import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyi59vbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyi59vbse"/>`,
		"fallback": "vadivam:calendar-chevrons-left",
	});
}

export default Component;
