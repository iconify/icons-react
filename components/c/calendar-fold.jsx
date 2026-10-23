import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag76r2btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag76r2btq"/>`,
		"fallback": "vadivam:calendar-fold",
	});
}

export default Component;
