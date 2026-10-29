import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orenhhbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orenhhbqt"/>`,
		"fallback": "vadivam:calendar-chevrons-left",
	});
}

export default Component;
