import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex8j4trvh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex8j4trvh"/>`,
		"fallback": "f7:circle-righthalf-fill",
	});
}

export default Component;
