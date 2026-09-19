import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-0mx1beg.css';

const viewBox = {"width":1856,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-0mx1beg"/>`,
		"fallback": "fa:ambulance",
	});
}

export default Component;
