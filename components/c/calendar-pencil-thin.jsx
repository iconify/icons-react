import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-jjn8czh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-jjn8czh"/>`,
		"fallback": "pullo:calendar-pencil-thin",
	});
}

export default Component;
