import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkrqb7brx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkrqb7brx"/>`,
		"fallback": "fa7-brands:gulp",
	});
}

export default Component;
