import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl1hj1dvu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl1hj1dvu"/>`,
		"fallback": "quill:discard",
	});
}

export default Component;
