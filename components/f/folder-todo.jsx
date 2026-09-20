import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swsj6o8lt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swsj6o8lt"/>`,
		"fallback": "quill:folder-todo",
	});
}

export default Component;
