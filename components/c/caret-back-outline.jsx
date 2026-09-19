import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg5oj0bkp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg5oj0bkp"/>`,
		"fallback": "ion:caret-back-outline",
	});
}

export default Component;
