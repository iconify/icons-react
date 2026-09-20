import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoit-5aey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoit-5aey"/>`,
		"fallback": "ri:arrow-drop-right-line",
	});
}

export default Component;
