import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf8eb6b3c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf8eb6b3c"/>`,
		"fallback": "cryptocurrency:ark",
	});
}

export default Component;
