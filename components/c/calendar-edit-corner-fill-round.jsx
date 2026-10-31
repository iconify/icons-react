import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpeglj27v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpeglj27v"/>`,
		"fallback": "coolicons:calendar-edit-corner-fill-round",
	});
}

export default Component;
