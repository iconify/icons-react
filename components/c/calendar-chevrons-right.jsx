import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue075dbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue075dbad"/>`,
		"fallback": "vadivam:calendar-chevrons-right",
	});
}

export default Component;
