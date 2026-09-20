import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp6t2j1op.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp6t2j1op"/>`,
		"fallback": "octicon:eye-16",
	});
}

export default Component;
