import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h74cu0bgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h74cu0bgz"/>`,
		"fallback": "quill:fullscreen",
	});
}

export default Component;
