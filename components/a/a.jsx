import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucb6iofxr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucb6iofxr"/>`,
		"fallback": "pinhead:a",
	});
}

export default Component;
