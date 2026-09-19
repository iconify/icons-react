import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0fis8b6t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0fis8b6t"/>`,
		"fallback": "fa7-solid:bus-alt",
	});
}

export default Component;
