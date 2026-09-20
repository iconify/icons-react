import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecc2mpxmo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecc2mpxmo"/>`,
		"fallback": "octicon:code-square-16",
	});
}

export default Component;
