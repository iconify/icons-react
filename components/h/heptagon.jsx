import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt98u-vbs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt98u-vbs"/>`,
		"fallback": "fa7-solid:heptagon",
	});
}

export default Component;
