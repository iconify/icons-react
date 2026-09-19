import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eragz99eo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eragz99eo"/>`,
		"fallback": "fa7-regular:comment-dots",
	});
}

export default Component;
