import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j01aanbin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j01aanbin"/>`,
		"fallback": "selfhst:bar-assistant-dark",
	});
}

export default Component;
