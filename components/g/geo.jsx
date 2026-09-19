import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7p4sbcuo.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7p4sbcuo"/>`,
		"fallback": "ls:geo",
	});
}

export default Component;
