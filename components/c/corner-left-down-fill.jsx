import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su8yfj8iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su8yfj8iz"/>`,
		"fallback": "ri:corner-left-down-fill",
	});
}

export default Component;
