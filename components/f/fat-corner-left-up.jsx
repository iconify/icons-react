import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi91_ui2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi91_ui2m"/>`,
		"fallback": "mynaui:fat-corner-left-up",
	});
}

export default Component;
