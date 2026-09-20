import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw6fp4b5q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw6fp4b5q"/>`,
		"fallback": "quill:inbox-add",
	});
}

export default Component;
