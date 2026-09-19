import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpnivwb3z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpnivwb3z"/>`,
		"fallback": "fluent-mdl2:analytics-report",
	});
}

export default Component;
