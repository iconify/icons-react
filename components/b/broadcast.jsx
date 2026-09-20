import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flncb6b-o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flncb6b-o"/>`,
		"fallback": "quill:broadcast",
	});
}

export default Component;
