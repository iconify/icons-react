import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9z4m6_0r.css';
import '../../css/j/j1jrbccvj.css';

const viewBox = {"width":180,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9z4m6_0r"/><path class="j1jrbccvj"/>`,
		"fallback": "thesvg-color:flame",
	});
}

export default Component;
