import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e98uzib3h.css';

const viewBox = {"width":768,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e98uzib3h"/>`,
		"fallback": "ls:book",
	});
}

export default Component;
