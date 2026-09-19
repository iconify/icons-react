import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml8m9nuev.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml8m9nuev"/>`,
		"fallback": "fa7-brands:avianex",
	});
}

export default Component;
