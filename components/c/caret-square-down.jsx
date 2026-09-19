import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln8uiccjr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln8uiccjr"/>`,
		"fallback": "fa7-regular:caret-square-down",
	});
}

export default Component;
