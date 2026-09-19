import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3-dh46ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3-dh46ae"/>`,
		"fallback": "boxicons:calendar-alt-2-filled",
	});
}

export default Component;
