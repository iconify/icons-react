import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akk0b-1ak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akk0b-1ak"/>`,
		"fallback": "quill:formatting",
	});
}

export default Component;
