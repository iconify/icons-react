import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r05ofdc8m.css';
import '../../css/m/mhqfye0oj.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="r05ofdc8m"/><path class="mhqfye0oj"/></g>`,
		"fallback": "thesvg-color:context7-dark",
	});
}

export default Component;
