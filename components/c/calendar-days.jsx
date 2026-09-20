import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqnf0qmsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqnf0qmsg"/>`,
		"fallback": "vadivam:calendar-days",
	});
}

export default Component;
