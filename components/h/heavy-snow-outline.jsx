import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzxn7xbvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzxn7xbvo"/>`,
		"fallback": "lsicon:heavy-snow-outline",
	});
}

export default Component;
