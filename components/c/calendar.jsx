import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-p7vfblr.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-p7vfblr"/>`,
		"fallback": "il:calendar",
	});
}

export default Component;
