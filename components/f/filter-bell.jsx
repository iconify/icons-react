import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jasz3fyxa.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jasz3fyxa"/>`,
		"fallback": "fad:filter-bell",
	});
}

export default Component;
