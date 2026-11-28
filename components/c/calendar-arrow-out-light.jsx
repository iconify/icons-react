import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfraj543k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfraj543k"/>`,
		"fallback": "pullo:calendar-arrow-out-light",
	});
}

export default Component;
