import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw641_f4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw641_f4e"/>`,
		"fallback": "mynaui:indifferent-ghost",
	});
}

export default Component;
