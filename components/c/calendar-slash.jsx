import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irsevjb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irsevjb1g"/>`,
		"fallback": "mynaui:calendar-slash",
	});
}

export default Component;
